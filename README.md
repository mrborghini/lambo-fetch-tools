# Lambo fetch tools

This npm package just makes it easier to fetch data and format it how you want it without constantly re-using the same code for parsing data.

## Usage

```bash
npm install lambo-fetch-tools
```

```ts
import { fetchJSON } from "lambo-fetch-tools";

interface TestData {
  message: string;
}

await fetchJSON<TestData>("https://your-url-here.com");
await fetchText("https://your-url-here.com");
await fetchBlob("https://your-url-here.com");
await fetchBytes("https://your-url-here.com");
```
