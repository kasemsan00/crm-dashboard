# CRM System

A modern CRM (Customer Relationship Management) system built with Next.js and Tailwind CSS with DaisyUI components.

## Features

- **Dashboard**: Overview of key metrics, recent activities, and sales charts
- **Customer Management**: Track and manage customer information
- **Lead Management**: Capture and nurture potential customers
- **Deal Pipeline**: Monitor sales opportunities through various stages
- **Settings**: Customize your CRM experience
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and DaisyUI components

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Charts**: [Recharts](https://recharts.org/)
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd crm-system
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── dashboard/       # Dashboard page
│   ├── customers/       # Customers management
│   ├── leads/           # Lead management
│   ├── deals/           # Deal pipeline
│   └── settings/        # System settings
├── components/          # Reusable components
│   ├── dashboard/       # Dashboard-specific components
│   ├── ui/              # UI components (buttons, cards, etc.)
│   ├── Header.tsx       # Application header
│   ├── Layout.tsx       # Main layout wrapper
│   └── Sidebar.tsx      # Navigation sidebar
└── lib/                 # Utility functions
```

## Customization

### Themes

This project uses DaisyUI for theming. You can customize the theme in `tailwind.config.ts`:

```typescript
daisyui: {
  themes: ["light", "dark", "corporate"],
},
```

You can switch between themes by changing the `data-theme` attribute in the HTML tag or using the theme selector in the settings page.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
