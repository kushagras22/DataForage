# Data Forage

Data Forage is a full-stack SaaS application designed for efficient file storage, management, and sharing. It provides a seamless user experience with features such as file uploads, folder organization, real-time collaboration, and secure access controls. Built with modern web technologies, Data Forage ensures scalability, performance, and reliability for both individual and enterprise users.

## Features

- **File Management**: Upload, download, and organize files into folders.
- **Collaboration**: Share files and folders with others and manage permissions.
- **Search Functionality**: Quickly locate files and folders with an intuitive search interface.
- **Version Control**: Track changes and maintain file version history.
- **Secure Access**: Role-based access control and encryption for data security.
- **Cross-Platform Support**: Accessible on desktop and mobile devices.

## Technologies Used

- **Frontend**: Built with [Next.js](https://nextjs.org) for a fast and responsive user interface.
- **Backend**: Powered by a robust API layer for handling business logic and data processing.
- **Database**: Utilizes a scalable database solution for storing user data and files.
- **Cloud Storage**: Integrated with cloud services for reliable file storage and retrieval.
- **Authentication**: Implemented using [better-auth](https://github.com/better-auth/better-auth) for secure and flexible authentication flows.

## Authentication

Data Forage uses better-auth for handling authentication across the application:

- **Server-Side Authentication**: Implemented in `src/lib/better-auth/auth.ts` using the better-auth library with Next.js cookie integration.
- **Client-Side Authentication**: Set up in `src/lib/better-auth/auth-client.ts` for React components.
- **Server Actions**: Authentication state is accessed in server components and actions via `src/actions/auth.action.ts`.

This authentication system provides secure session management, user authentication, and authorization controls throughout the application.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kushagras22/DataForage.git
   cd data-forage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Deployment

Data Forage can be deployed on cloud platforms for production use. Refer to the deployment documentation for detailed instructions.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
