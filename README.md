# LifeStar Innovation

## Project Overview

LifeStar Innovation is a modern web application built to showcase an innovative environmental solution that addresses plastic pollution. Founded by Mr. Richard Nsor from Bosomkyekye, Ashanti Region, the project highlights a groundbreaking approach to eliminating environmental pollution by recycling plastic waste into high-quality fuel through energy-efficient processes like pyrolysis.

### What the Site Does

The website serves as a digital presence for LifeStar Innovation, featuring:

- **Hero Section**: A welcoming introduction to the company and its mission
- **About Section**: Information about the innovator, Mr. Richard Nsor, and the company's mission and vision
- **Services Section**: Details about the services offered
- **Products Section**: Showcase of products derived from plastic waste recycling
- **Contact Section**: Ways to get in touch with the organization
- **Accessibility Widget**: Integration with the Boafo accessibility widget to make the site accessible to all users

### Purpose

The primary purpose of this website is to:

1. Raise awareness about plastic pollution and its environmental impact
2. Showcase the innovative technology of converting plastic waste into fuel
3. Provide information about the company's services and products
4. Enable stakeholders to connect with the organization
5. Demonstrate corporate responsibility through accessible web design

### Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **JavaScript (JSX)**: Programming language for React components
- **CSS**: Styling for responsive design
- **Font Awesome**: Icon library for visual elements
- **Boafo Accessibility Widget**: Third-party widget for web accessibility features

### Accessibility Features

This website uses the [Boafo Accessibility Widget](https://boafo.co) to make the site accessible to all users, including those with disabilities. The widget provides features such as:

- Text-to-speech functionality
- Font size adjustments
- Contrast adjustments
- Screen reader support
- Keyboard navigation enhancements

---

## How to Get Your Boafo API Key

To use the Boafo accessibility widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in to your existing account
3. Navigate to your dashboard
4. Copy your API key from the dashboard

---

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo accessibility widget into your project, please refer to the official integration guide:

[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GROW-YAI/YAI_LifeStar.git
   cd YAI_LifeStar
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment file and add your Boafo API key:

   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and replace the placeholder with your actual API key:

   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the URL shown in your terminal) to view the website.

### Building for Production

To create a production build:

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
pnpm preview
```

---

## Project Structure

```
YAI_LifeStar/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BoafoWidgetInitializer.jsx
│   ├── assets/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/
│       ├── images/
│       └── media/
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

**Note**: Never commit your `.env` file to version control. The `.gitignore` file is configured to exclude it automatically.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is proprietary. All rights reserved.

---

## Contact

For questions or inquiries, please reach out through the contact form on the website.