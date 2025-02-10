import { SearchPostFormContainer } from "./styles";

// Tipagem para as props do componente
interface SearchPostFormProps {
  onInputChange: (value: string) => void;
}

export function SearchPostForm({ onInputChange }: SearchPostFormProps) {
  // Função chamada ao pressionar Enter no input
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onInputChange(event.currentTarget.value); // Passa o valor do input para a função
    }
  };

  return (
    <SearchPostFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onKeyDown={handleKeyDown} // Chama a função quando pressionar Enter
      />
    </SearchPostFormContainer>
  );
}
