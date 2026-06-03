# Deployment Instructions for Vercel

## For Proper Mobile Display on iPhone 15 Pro

When deploying to Vercel, you need to ensure proper viewport configuration.

### Option 1: Using Vercel Dashboard
After deploying, add these headers in your `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "frame-ancestors 'self'"
        }
      ]
    }
  ]
}
```

### Option 2: Add index.html to root (before deploying)

Create `index.html` in the project root with:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>Hotel Booking</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/__figma__entrypoint__.ts"></script>
  </body>
</html>
```

### Testing on iPhone
1. Open Safari on iPhone 15 Pro
2. Navigate to your Vercel URL
3. Tap Share button → Add to Home Screen
4. Open the app from home screen for full-screen experience

## Current Optimizations Applied
✅ Removed fake status bar div
✅ Added iOS safe area CSS utilities  
✅ Optimized for 393px viewport (iPhone 15 Pro)
✅ Mobile-first responsive design
✅ Proper touch interactions
