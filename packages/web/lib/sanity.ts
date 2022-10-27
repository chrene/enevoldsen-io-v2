import sanityClient from "@sanity/client";
import { sanity } from "../client-config";

export default sanityClient({
  ...sanity,
});
