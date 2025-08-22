import { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <>
      <div style={{ padding: "2rem" }}>
        {!selectedCharacter ? (
          <CharacterList onSelectCharacter={setSelectedCharacter} />
        ) : (
          <CharacterDetail
            character={selectedCharacter}
            onBack={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </>

  );
}

export default App;
