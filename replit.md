# Overview

This is a full-stack web application built with React and Express.js that appears to be a landing page for "AbhiMerger" - a desktop application for merging PDF files from Excel data sources. The application follows a modern monorepo structure with a client-side React frontend and an Express.js backend, utilizing TypeScript throughout and PostgreSQL with Drizzle ORM for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui component system
- **Styling**: Tailwind CSS with custom design tokens and glassmorphism effects
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for page animations and scroll reveals
- **Component Structure**: Modular component architecture with custom hooks for platform detection, mobile responsiveness, and scroll animations

## Backend Architecture
- **Framework**: Express.js with TypeScript in ES module format
- **Development**: Hot reloading with Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for database implementations
- **API Design**: RESTful API structure with `/api` prefix routing
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging with performance metrics for API endpoints

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL via Neon Database serverless connection
- **Schema**: User management with UUID primary keys and unique constraints
- **Validation**: Zod schemas integrated with Drizzle for type-safe data validation
- **Migrations**: Drizzle Kit for schema migrations with version control

## Development & Build System
- **Monorepo Structure**: Client, server, and shared code organization
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: Strict TypeScript configuration across all modules
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)
- **Environment**: Separate development and production configurations

## External Dependencies

- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Framework**: Comprehensive Radix UI component library for accessible components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Development Tools**: 
  - Replit integration for development environment
  - Cartographer plugin for enhanced development experience
  - Runtime error overlay for debugging
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **State Management**: TanStack React Query for efficient server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Date Handling**: date-fns for date manipulation and formatting