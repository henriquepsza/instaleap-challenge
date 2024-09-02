### **Instaleap Challenge - Project Overview**

This project was developed to integrate with the Instaleap API, enabling a grocery store in Uganda, TongoMart, to offer precise delivery times to its customers and organize the work of pickers and drivers in stores. The main goal of this project is to build a platform that interacts with Instaleap's logistics platform following the requirements provided in the challenge.

### **Project Features**

1. **Introduction Screen**:
    - The application starts with an introductory screen where the user can initiate the availability check process by clicking a button.
    - This action triggers a request to the Instaleap Availability API to retrieve available time slots.

2. **Availability Check**:
    - The application displays the available time slots for delivery or pickup, initially using mock data.
    - Once a time slot is selected, the interface allows for creating a new job (order) using Instaleap's API.

3. **Job Creation and Visualization**:
    - After creating a job, the application fetches the job details using the "Get job by id" endpoint from the Instaleap API and displays them to the user.

4. **Billing Process**:
    - The application includes a field where the user can enter an amount and a button to process the billing (payment) using the job's details.
    - The payment status is then updated according to the API's response.

### **Project Setup and Execution**

To set up and run the project locally, follow the instructions below:

#### **Prerequisites**
- Ensure you have Node.js and npm installed on your machine.

#### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/henriquepsza/instaleap-challenge
   cd instaleap-challenge
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

#### **Scripts**

The project includes several npm scripts to streamline development:

- **`dev`**: Starts the development server using Vite.
  ```bash
  npm run dev
  ```

- **`build`**: Compiles TypeScript and builds the project for production.
  ```bash
  npm run build
  ```

- **`lint`**: Lints the project using ESLint to ensure code quality.
  ```bash
  npm run lint
  ```

- **`preview`**: Serves the production build locally to preview the application.
  ```bash
  npm run preview
  ```

- **`json-server`**: Starts a JSON Server to simulate a backend server and serves the `db.json` file, which contains the job IDs created during the application flow.
  ```bash
  npm run json-server
  ```

#### **Running the Project**

1. Start the JSON Server (in a separate terminal window):
   ```bash
   npm run json-server
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to interact with the application.

### **Usage**

1. On the introduction screen, click the button to initiate the availability check.
2. Select a time slot from the displayed options.
3. Create a job using the selected time slot.
4. View the job details and proceed to billing if needed.

### **Installed Packages Overview**

This section provides an overview of the key packages installed in the project, detailing their purpose and how they contribute to the overall functionality of the application.

#### **1. React & React-DOM**
- **Purpose**: Core libraries for building the user interface of the application.
- **Usage**: React is used to create components, manage state, and render the UI. React-DOM is responsible for rendering React components in the DOM.

#### **2. Vite**
- **Purpose**: A fast build tool and development server.
- **Usage**: Vite is used for local development, offering a lightning-fast development environment with support for hot module replacement (HMR).

#### **3. TypeScript**
- **Purpose**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Usage**: TypeScript is used throughout the project to ensure type safety and improve code quality. It helps catch errors during development, making the codebase more maintainable.

#### **4. Chakra UI**
- **Purpose**: A simple, modular, and accessible component library for React.
- **Usage**: Chakra UI is used for building the UI of the application, providing pre-designed components like buttons, modals, grids, and more, which are customizable and responsive by default.

#### **5. @tanstack/react-query**
- **Purpose**: A powerful data-fetching and state-management library for React.
- **Usage**: React Query is used to handle API requests and manage server state. It simplifies data fetching, caching, synchronization, and more, ensuring efficient and maintainable data flows in the application.

#### **6. JSON Server**
- **Purpose**: A simple, full fake REST API server.
- **Usage**: JSON Server is used to simulate a backend for storing job IDs created during the application flow. It allows for quick prototyping and testing of API interactions without the need for a fully-fledged backend.

#### **7. Axios**
- **Purpose**: A promise-based HTTP client for the browser and Node.js.
- **Usage**: Axios is used to make HTTP requests to the Instaleap API and the local JSON Server. It simplifies the process of sending asynchronous requests and handling responses.

#### **8. ESLint**
- **Purpose**: A static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code.
- **Usage**: ESLint is configured to enforce coding standards and best practices in the project, helping to maintain a consistent and error-free codebase.

#### **9. Prettier**
- **Purpose**: An opinionated code formatter.
- **Usage**: Prettier is used to automatically format code according to a consistent style, making the codebase cleaner and more readable.

#### **10. React Icons**
- **Purpose**: A popular icon library for React.
- **Usage**: React Icons is used to include a variety of icons throughout the application, enhancing the UI with visual elements.

### **Conclusion**

This project demonstrates the integration with the Instaleap API, covering the key steps required to create and manage jobs and payments through the platform. By following the provided instructions, you should be able to run and explore the project locally.

Feel free to reach out if you have any questions or issues setting up the project.