RAJASTHAN ART AND CRAFT — WEBSITE

PUBLIC WEBSITE
- index.html is the public homepage.
- styles.css contains the current homepage layout and responsive styling.
- app.js powers the product detail pop-ups, navigation menu and WhatsApp enquiries.
- Product images are referenced from the assets/ folder. Keep those filenames and folder paths unchanged when uploading or deploying.

ADMIN SIGN-IN
- Open /admin.html on the deployed website to reach the sign-in page.
- The page uses Supabase Auth email/password sign-in and reads the public URL and publishable key from supabase-config.js.
- Create the administrator account in Supabase Dashboard → Authentication → Users before signing in.
- No password or service-role/secret key is stored in this repository.
- A successful sign-in currently confirms the authentication session only. It does NOT yet provide product editing, photo uploads, country-specific prices or enquiry management.

IMPORTANT SECURITY / NEXT STEP
- Before connecting product management, define the database schema, restrict write access to an administrator identity using Row Level Security (RLS), and configure Storage policies for product images.
- A publishable browser key is expected to be public; it is not a substitute for RLS.
- Never place a Supabase service_role key or other secret in browser files or commit it to GitHub.
- Do not treat an authenticated session alone as proof that a user is authorized to edit business data.

BUSINESS CONTACT
Rajasthan Art And Craft
Since 2000
Kanota Agra Road, Jaipur, Rajasthan 303012, India
Phone / WhatsApp: +91 9458450820
Email: rajasthanartandcraftofficial@gmail.com
Instagram: @rajasthan_art_and_craft

DEPLOYMENT
Deploy the repository with index.html at the site root. Ensure the assets/ directory is included in the deployment. If Vercel is connected to this GitHub repository, new commits should trigger a deployment according to the project's deployment settings.
