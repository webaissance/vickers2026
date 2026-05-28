
CREATE TABLE public.rental_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_type text NOT NULL,
  preferred_date date NOT NULL,
  alternate_date date,
  preferred_start_time text NOT NULL,
  estimated_end_time text NOT NULL,
  estimated_attendance text NOT NULL,
  event_visibility text NOT NULL,
  showing_media text NOT NULL,
  description text NOT NULL,
  concessions_interest text,
  outside_catering text
);

GRANT INSERT ON public.rental_inquiries TO anon, authenticated;
GRANT ALL ON public.rental_inquiries TO service_role;

ALTER TABLE public.rental_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON public.rental_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
