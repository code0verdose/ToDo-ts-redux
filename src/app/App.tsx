import { Layout } from "../layout";
import { Wrapper } from "../components/Wrapper";
import { List } from "../components/List";
import { ListTop } from "../components/ListTop";
import { ListBottom } from "../components/ListBottom/ui/ListBottom";

function App() {
  return (
    <>
      <Layout>
        <Wrapper>
          <ListTop />
          <List />
          <ListBottom />
        </Wrapper>
      </Layout>
    </>
  );
}

export { App };
