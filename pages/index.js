import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product selector"
    primaryAction={{
      content: "Select products",
      onAction: () => console.log('clicked')
    }}
  >
  </Page>
);

export default Index;
