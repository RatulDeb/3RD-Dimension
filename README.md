# 3RD Dimension website

A first milestone for a construction company website. It uses plain HTML and CSS, with a small amount of vanilla JavaScript for the mobile menu and the current year. There is no build step, package installation, or server setup.

The company name, sample project names, photos, and contact email are demonstration content. Update them to match your business before publishing the site.

## Project files

- `index.html` — the page content and navigation sections.
- `styles.css` — colors, layout, responsive design, and visual styling.
- `script.js` — the mobile navigation toggle and automatic copyright year.

## Open and view the website

1. Download or save the `construction-company-website` folder somewhere easy to find.
2. Open **Visual Studio Code**.
3. Choose **File → Open Folder...** (on Windows, you can also press `Ctrl+K`, then `Ctrl+O`).
4. Select the `construction-company-website` folder and choose **Select Folder**.
5. In the Explorer panel on the left, click `index.html` to inspect the page. Open `styles.css` or `script.js` when you want to inspect those parts.
6. To see the page in Chrome, open File Explorer, open the project folder, then double-click `index.html`. It should open in your default browser. If that is not Chrome, right-click the file, choose **Open with**, then choose **Google Chrome**.

**Live Server is not required.** The page works by opening `index.html` directly. If you install the optional **Live Server** extension in VS Code, you can right-click `index.html` and choose **Open with Live Server**. This opens a local preview and refreshes the browser after you save changes.

## Try the navigation

- Click **Home**, **Services**, **Projects**, **About**, or **Contact** in the top navigation. Each link scrolls to its matching section on the same page.
- Click **Explore our work** to jump to Projects, or **Start a conversation** to jump to Contact.
- Make the browser window narrow to see the mobile menu button. Click it to open the menu, then choose a section; the menu closes after you choose a link.
- The **Back to top** link returns to the home section.

## Make a first edit

1. In VS Code, open `index.html`.
2. Find the text `Built with purpose.` and change it to a headline of your choice.
3. Save with `Ctrl+S`.
4. Refresh Chrome. With Live Server, the page refreshes for you.

You can edit headings, descriptions, and section text in `index.html`. Change colors and spacing in `styles.css`. The contact button currently opens an email draft addressed to `hello@example.com`; replace that address in `index.html` with your business email.

## Notes

- This is a single-page front-end milestone. The contact link opens an email draft; there is no server or form submission system.
- The photos and web fonts load from the internet, so those visual assets need a connection. The text and layout still work if you are offline.
