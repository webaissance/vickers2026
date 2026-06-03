import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const eventTypes = [
  "Birthday Party",
  "Private Screening",
  "Corporate Event",
  "Community Event",
  "Lecture/Presentation",
  "Fundraiser",
  "Other",
] as const;

const attendanceOptions = ["Under 25", "25–50", "50–100", "100+"] as const;
const yesNoUnsure = ["Yes", "No", "Unsure"] as const;
const visibilityOptions = ["A private event", "A public ticketed event"] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  event_type: z.enum(eventTypes, { required_error: "Select an event type" }),
  preferred_date: z.date({ required_error: "Preferred date is required" }),
  alternate_date: z.date().optional(),
  preferred_start_time: z.string().min(1, "Start time is required"),
  estimated_end_time: z.string().min(1, "End time is required"),
  estimated_attendance: z.enum(attendanceOptions, {
    required_error: "Select estimated attendance",
  }),
  event_visibility: z.enum(visibilityOptions, {
    required_error: "Select event visibility",
  }),
  showing_media: z.enum(yesNoUnsure, { required_error: "Select an option" }),
  description: z
    .string()
    .trim()
    .min(10, "Please provide a brief description")
    .max(2000),
  concessions_interest: z.enum(yesNoUnsure).optional(),
  outside_catering: z.enum(yesNoUnsure).optional(),
});

type FormValues = z.infer<typeof schema>;

const sectionHeading =
  "font-heading text-xl gold-text-gradient font-semibold tracking-wider mt-8 mb-4";

const RentalInquiryForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferred_start_time: "",
      estimated_end_time: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("rental_inquiries").insert({
        name: values.name,
        email: values.email,
        phone: values.phone,
        event_type: values.event_type,
        preferred_date: format(values.preferred_date, "yyyy-MM-dd"),
        alternate_date: values.alternate_date
          ? format(values.alternate_date, "yyyy-MM-dd")
          : null,
        preferred_start_time: values.preferred_start_time,
        estimated_end_time: values.estimated_end_time,
        estimated_attendance: values.estimated_attendance,
        event_visibility: values.event_visibility,
        showing_media: values.showing_media,
        description: values.description,
        concessions_interest: values.concessions_interest ?? null,
        outside_catering: values.outside_catering ?? null,
      });
      if (error) throw error;
      toast.success("Inquiry submitted", {
        description: "Thank you — we will be in touch soon.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", {
        description: "Please try again or email info@vickerstheatre.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
        <h2 className={sectionHeading}>Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className={sectionHeading}>Event Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="event_type"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Type of Event *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alternate_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Alternate Date (optional)</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_start_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Start Time *</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimated_end_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated End Time *</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="estimated_attendance"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Estimated Attendance *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                  >
                    {attendanceOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/30"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className={sectionHeading}>Event Details</h2>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="event_visibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Will this be:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    {visibilityOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/30"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="showing_media"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you planning to show a film or other media?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-3"
                  >
                    {yesNoUnsure.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/30"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Briefly describe your event *</FormLabel>
                <FormControl>
                  <Textarea rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className={sectionHeading}>Optional Additions</h2>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="concessions_interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested in concessions service?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-3"
                  >
                    {yesNoUnsure.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/30"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="outside_catering"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Will you be bringing outside catering? (Outside alcohol is not permitted)</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-3"
                  >
                    {yesNoUnsure.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 border border-border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/30"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <p className="text-sm text-muted-foreground mt-8 mb-4 italic">
          Submitting this form does not guarantee availability or confirm a booking.
          Rentals are subject to availability around scheduled film programming.
        </p>

        <Button
          type="submit"
          disabled={submitting}
          className="gold-gradient text-primary-foreground font-semibold tracking-wide"
        >
          {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Inquiry
        </Button>
      </form>
    </Form>
  );
};

export default RentalInquiryForm;
