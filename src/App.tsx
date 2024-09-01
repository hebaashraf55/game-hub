import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlateFormSelector from "./components/PlateFormSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";



export interface GameQuery {
  genre : Genre | null ;
  platform : Platform | null ;
  sortOrder : string;
}
function App() {
  const [gameQuery , setGameQuery ] =useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `'nav ' 'main'`,
      lg : `'nav nav' 'aside main'` // 1024px
    }}
    templateColumns={{
      base : '1fr',
      lg: '200px 1fr'
    }}
    >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
      
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
           <GenreList selectedGenren={gameQuery.genre}  onSelectedGenre={(genre) => setGameQuery({...gameQuery , genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlateFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} sortOrder={gameQuery.sortOrder}/>
        </Flex> 
        <GameGrid gameQuery={gameQuery} /> 
      </GridItem>
    </Grid>
  );
}

export default App;
