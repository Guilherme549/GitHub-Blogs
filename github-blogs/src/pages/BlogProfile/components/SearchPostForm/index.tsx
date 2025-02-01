import { SearchPostFormContainer } from "./styles";

// Tipagem para as props do componente
interface SearchPostFormProps {
  onInputChange: (value: string) => void;
}

export function SearchPostForm({ onInputChange }: SearchPostFormProps) {
  // Função chamada sempre que o valor do input mudar
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value); // Passa o valor do input para a função
  };

  return (
    <SearchPostFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChange} // Chama a função de handleChange
      />
    </SearchPostFormContainer>
  );
}
