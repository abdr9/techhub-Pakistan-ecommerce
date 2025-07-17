# How to Edit Your TechHub Pakistan Website (Beginner Guide)

## 🎯 Quick Start - What You Can Easily Edit

### **1. Change Store Name & Logo**
**File:** `index.html` (Line 16)
```html
<h1><i class="fas fa-desktop"></i> TechHub Pakistan</h1>
```
**Change to:** Your store name

### **2. Edit Contact Information**
**File:** `index.html` (Lines 298-312)
```html
<p>Plaza 123, Main Boulevard, Gulberg III, Lahore, Pakistan</p>
<p>+92 300 1234567</p>
<p>info@techhubpakistan.com</p>
```
**Change to:** Your actual contact details

### **3. Edit Product Names & Prices**
**File:** `index.html` (Lines 127-200)
```html
<h3>NVIDIA RTX 4090</h3>
<p class="price">₨ 450,000</p>
```
**Change to:** Your actual products and prices

### **4. Change Colors**
**File:** `styles.css` (Line 175)
```css
background: #4285f4;  /* Main blue color */
```
**Change to:** Your preferred color (use color picker websites)

## 🛠️ Step-by-Step Editing Process

### **Method 1: Using Visual Studio Code (Easiest)**

1. **Open VS Code in your project folder:**
   ```powershell
   code .
   ```

2. **Install helpful extensions:**
   - HTML CSS Support
   - Live Server (for previewing changes)
   - Prettier (for formatting)

3. **Edit files:**
   - Click on any file in the left panel
   - Make your changes
   - Save with `Ctrl + S`

4. **Preview changes locally:**
   - Right-click on `index.html`
   - Select "Open with Live Server"

5. **Upload changes to GitHub:**
   ```powershell
   git add .
   git commit -m "Updated store information"
   git push origin main
   ```

### **Method 2: GitHub Web Editor (No Software Needed)**

1. **Go to your repository:**
   https://github.com/abdr9/techhub-Pakistan-ecommerce

2. **Click on any file (e.g., index.html)**

3. **Click the pencil icon (Edit)**

4. **Make your changes**

5. **Scroll down and click "Commit changes"**

6. **Your website updates automatically in 2-3 minutes**

## 📝 Common Edits for Beginners

### **1. Change Your Store Name**
**What to edit:** Look for "TechHub Pakistan" in `index.html`
**Change to:** Your actual store name

### **2. Update Your Products**
**What to edit:** Product names, prices, descriptions
**File:** `index.html` around lines 127-200

### **3. Change Contact Details**
**What to edit:** Phone, email, address
**File:** `index.html` around lines 298-312

### **4. Update About Section**
**What to edit:** Company description
**File:** `index.html` around lines 258-268

### **5. Change Colors**
**What to edit:** Main color theme
**File:** `styles.css` - look for `#4285f4` (blue color)

## 🎨 Easy Customization Tips

### **Colors:**
- Blue: `#4285f4`
- Red: `#ff4444`
- Green: `#4caf50`
- Orange: `#ff9800`
- Purple: `#9c27b0`

### **Adding New Products:**
Copy this template and paste it in the products section:
```html
<div class="product-card">
    <div class="product-image">
        <img src="YOUR_IMAGE_URL" alt="PRODUCT_NAME">
    </div>
    <div class="product-info">
        <h3>PRODUCT_NAME</h3>
        <p class="price">₨ PRICE</p>
        <button class="btn btn-primary add-to-cart">Add to Cart</button>
    </div>
</div>
```

## 🚀 How to Update Your Live Website

### **After making changes:**
1. **Save your files**
2. **Run these commands:**
   ```powershell
   git add .
   git commit -m "Description of what you changed"
   git push origin main
   ```
3. **Wait 2-3 minutes**
4. **Refresh your website**

## 🆘 Need Help?

### **Common Issues:**
- **Website broken after edit?** Check the GitHub Actions tab for errors
- **Changes not showing?** Clear browser cache (Ctrl + F5)
- **CSS not working?** Check for typos in styles.css

### **Resources:**
- **W3Schools:** https://www.w3schools.com/html/
- **MDN Web Docs:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **Color Picker:** https://htmlcolorcodes.com/color-picker/

## 📱 Test Your Changes

### **Always test on:**
1. **Desktop browser** (Chrome, Firefox, Edge)
2. **Mobile phone** (responsive design)
3. **Different screen sizes**

## 🎯 Quick Reference

### **Important Files:**
- `index.html` - Main content (text, products, contact info)
- `styles.css` - Colors, fonts, layout
- `script.js` - Interactive features (cart, forms)

### **Don't Edit These (Advanced):**
- `netlify.toml`
- `vercel.json`
- `firebase.json`
- `.git/` folder

## 💡 Pro Tips for Beginners

1. **Always make small changes** - Edit one thing at a time
2. **Test locally first** - Use Live Server extension
3. **Keep backups** - Git automatically saves versions
4. **Ask for help** - GitHub has great documentation
5. **Start simple** - Change text first, then colors, then layout

Remember: Your website is already working perfectly! Start with small changes and gradually learn more as you go.
