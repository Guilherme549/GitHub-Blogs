import { SearchPostFormContainer } from "./styles";

// Tipagem para as props do componente
interface SearchPostFormProps {
  onInputChange: (value: string) => void;
}

export function SearchPostForm({ onInputChange }: SearchPostFormProps) {
  // Função chamada ao pressionar Enter no input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <SearchPostFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChange} // Chama a função quando pressionar Enter
      />
    </SearchPostFormContainer>
  );
}
