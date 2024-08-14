## Getting Started

First, install the node_modules:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Testing the validation issue with the "UI5 Components for React" dropdown

After following the steps in the "Getting Started" section and starting the app at [http://localhost:3000](http://localhost:3000) follow these steps:

1. Refresh the page - you'll notice that the fields are empty and they only fill with data in about 1 second. This behaviour simulates the loading of data by sending an HTTP request to a backend API first.

2. Click on the "Submit" button - we see validation errors below two of the fields, including the dropdown field. Even though there is a selected value in the dropdown.

3. Manually select another option in the dropdown

4. Change the value in "Last Name" field by one or more characters (but don't leave it blank) and press the Tab button

5. Click the "Submit" button again. No validation errors are shown and instead we see a popup saying "Submit with no validation errors"
