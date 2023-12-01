# falcon_anime
anime API server and Nextjs client
## <span id="installation">💻 Installation</span>

### .env
1. .env for server .
   ```bash
   cd server
   ```
   make .env and put data in it
   ```bash
   SERVER_URL=mongodb+srv://xxxxxxxxxxxxxxxxxxx
   CLIENT=http://localhost:3000
   SERVER=http://localhost:3001
   ```
2. .env.local for client
   ```bash
   cd client
   ```
   make .env.local and put data int it
   ```bash
   NEXT_PUBLIC_SERVER=http://localhost:3001
   NEXT_PUBLIC_CLIENT=http://localhost:3000
   ```

### Local

1. Clone the repository and move into the directory.

   ```bash
   git clone https://github.com/falcon71181/falcon_anime
   cd falcon_anime
   ```

2. Install all the dependencies.
    for server
   ```bash
   cd server
   ```
    for client
   ```bash
   cd client
   ```
   ```bash
   npm i #or yarn install or pnpm i
   ```

4. Start the server!
   ```bash
   cd server
   ```
   ```bash
   npm run dev #or yarn run dev or pnpm run dev
   ```

   Now the server should be running on [http://localhost:3001] - (http://localhost:3001)

5. Start the client!
   ```bash
   cd client
   ```
   ```bash
   npm run dev #or yarn run dev or pnpm run dev
   ```

   Now the server should be running on [http://localhost:3000] - (http://localhost:3000)
