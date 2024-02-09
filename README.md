> [!CAUTION]
> Project is abandoned

> [!IMPORTANT]
> new Project is underway with <kbd>TypeScript</kbd> and <kbd>React</kbd>

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

### `GET` Anime Home Page

#### Endpoint

```bash
https://https://falconanime.onrender.com/home
```

#### Request sample

```javascript
const resp = await fetch("https://falconanime.onrender.com/home");
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  genres: ["Action", "Cars", "Adventure", ...],
  latestEpisodeAnimes: [
    {
      id: string,
      name: string,
      poster: string,
      duration: string,
      type: string,
      rating: string,
      episodes: {
        sub: number,
        dub: number,
      }
    },
    {...},
  ],
  spotlightAnimes: [
    {
      id: string,
      name: string,
      jname: string,
      poster: string,
      description: string,
      rank: number,
      otherInfo: string[],
      episodes: {
        sub: number,
        dub: number,
      },
    },
    {...},
  ],
  top10Animes: {
    today: [
      {
        episodes: {
          sub: number,
          dub: number,
        },
        id: string,
        name: string,
        poster: string,
        rank: number
      },
      {...},
    ],
    month: [...],
    week: [...]
  },
  topAiringAnimes: [
    {
      id: string,
      name: string,
      jname: string,
      poster: string,
    },
    {...},
  ],
  topUpcomingAnimes: [
    {
      id: string,
      name: string,
      poster: string,
      duration: string,
      type: string,
      rating: string,
      episodes: {
        sub: number,
        dub: number,
      }
    },
    {...},
  ],
  trendingAnimes: [
    {
      id: string,
      name: string,
      poster: string,
      rank: number,
    },
    {...},
  ],
}
```

### `GET` Anime About Info

#### Endpoint

```sh
https://falconanime.onrender.com/anime/:id
```

#### Query Parameters

| Parameter |  Type  |             Description              | Required? | Default |
| :-------: | :----: | :----------------------------------: | :-------: | :-----: |
|   `id`    | string | The unique anime id (in kebab case). |    Yes    |   --    |

#### Request sample

```javascript
const resp = await fetch(
  "https://falconanime.onrender.com/anime/jujutsu-kaisen-2nd-season-18413"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```javascript
{
  anime: [
    info: {
      id: string,
      name: string,
      poster: string,
      description: string,
      stats: {
        rating: string,
        quality: string,
        episodes: {
          sub: number,
          dub: number
        },
        type: string,
        duration: string
      }
    }
    moreInfo: {
      aired: string,
      genres: ["Action", "Mystery", ...],
      status: string,
      studios: string,
      duration: string
      ...
    }
  ],
  mostPopularAnimes: [
    {
      episodes: {
        sub: number,
        dub: number,
      },
      id: string,
      jname: string,
      name: string,
      poster: string,
      type: string
    },
    {...},
  ],
  recommendedAnimes: [
    {
      id: string,
      name: string,
      poster: string,
      duration: string,
      type: string,
      rating: string,
      episodes: {
        sub: number,
        dub: number,
      }
    },
    {...},
  ],
  relatedAnimes: [
    {
      id: string,
      name: string,
      poster: string,
      duration: string,
      type: string,
      rating: string,
      episodes: {
        sub: number,
        dub: number,
      }
    },
    {...},
  ],
  seasons: [
    {
      id: string,
      name: string,
      title: string,
      poster: string,
      isCurrent: boolean
    },
    {...}
  ]
}
```

### `GET` Search Results

#### Endpoint

```sh
https://falconanime.onrender.com/anime/search?q={query}&page={page}
```

#### Query Parameters

| Parameter |  Type  |                            Description                            | Required? | Default |
| :-------: | :----: | :---------------------------------------------------------------: | :-------: | :-----: |
|    `q`    | string | The search query, i.e. the title of the item you are looking for. |    Yes    |   --    |
|  `page`   | number |                  The page number of the result.                   |    No     |   `1`   |

#### Request sample

```javascript
const resp = await fetch(
  "https://falconanime.onrender.com/anime/search?q=titan&page=1"
);
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  animes: [
    {
      id: string,
      name: string,
      poster: string,
      duration: string,
      type: string,
      rating: string,
      episodes: {
        sub: number,
        dub: number,
      }
    },
    {...},
  ],
  mostPopularAnimes: [
    {
      episodes: {
        sub: number,
        dub: number,
      },
      id: string,
      jname: string,
      name: string,
      poster: string,
      type: string
    },
    {...},
  ],
  currentPage: 1,
  totalPages: 1,
  hasNextPage: false
}
```
