/*
  # Update contact submissions policies
  
  1. Changes
    - Drop existing insert policy
    - Create new policy that allows both anonymous and authenticated users to insert
    - This ensures form submissions work regardless of authentication state
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create new policy that allows both anon and authenticated users
CREATE POLICY "Allow all users to submit contact form"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);