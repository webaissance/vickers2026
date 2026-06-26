
-- Remove the overly permissive INSERT policy (WITH CHECK true)
DROP POLICY IF EXISTS "Anyone can submit an inquiry" ON public.rental_inquiries;

-- Recreate with explicit server-side validation in WITH CHECK
CREATE POLICY "Public can submit validated inquiry"
ON public.rental_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(phone)) BETWEEN 7 AND 30
  AND length(btrim(description)) BETWEEN 10 AND 2000
  AND length(event_type) BETWEEN 1 AND 100
  AND length(estimated_attendance) BETWEEN 1 AND 50
  AND length(event_visibility) BETWEEN 1 AND 50
  AND length(showing_media) BETWEEN 1 AND 20
);

-- Ensure no read/update/delete access leaks to public roles
REVOKE SELECT, UPDATE, DELETE ON public.rental_inquiries FROM anon, authenticated;
GRANT INSERT ON public.rental_inquiries TO anon, authenticated;
GRANT ALL ON public.rental_inquiries TO service_role;
