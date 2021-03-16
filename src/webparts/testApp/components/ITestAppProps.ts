import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ITestAppProps {
  description: string;
  context: WebPartContext;
  siteUrl?: string;
  Urlvalue?: string;
}
