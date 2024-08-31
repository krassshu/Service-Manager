Aby stworzyć czat w Next.js używając Supabase, który umożliwia zarówno tworzenie grupowych konwersacji, jak i rozmów peer-to-peer (p2p), będziesz potrzebować kilku tabel w bazie danych PostgreSQL. Poniżej przedstawiam propozycję struktury tabel, które będą potrzebne do zarządzania użytkownikami, wiadomościami, konwersacjami grupowymi oraz indywidualnymi.

### Struktura tabel

1. **users** - przechowuje informacje o użytkownikach.
2. **conversations** - przechowuje informacje o konwersacjach (zarówno grupowych, jak i p2p).
3. **messages** - przechowuje wiadomości wysyłane w ramach konwersacji.
4. **participants** - przechowuje informacje o uczestnikach konwersacji.
5. **groups** - (opcjonalnie) przechowuje informacje o grupach czatowych.

### Definicje tabel

#### 1. Tabela `users`

Tabela przechowująca informacje o użytkownikach. W Supabase istnieje domyślna tabela `auth.users` zarządzająca autoryzacją, ale możesz dodać dodatkową tabelę do przechowywania dodatkowych informacji o użytkownikach.

```sql
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 2. Tabela `conversations`

Tabela przechowująca informacje o konwersacjach. Będzie zawierała zarówno konwersacje p2p, jak i grupowe.

```sql
CREATE TABLE conversations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255),
  is_group BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `is_group` — określa, czy konwersacja jest grupowa (TRUE) czy p2p (FALSE).

#### 3. Tabela `messages`

Tabela przechowująca wszystkie wiadomości.

```sql
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id uuid REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id uuid REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `conversation_id` — ID konwersacji, do której należy wiadomość.
- `sender_id` — ID użytkownika, który wysłał wiadomość.

#### 4. Tabela `participants`

Tabela przechowująca informacje o uczestnikach konwersacji.

```sql
CREATE TABLE participants (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id uuid REFERENCES conversations(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `conversation_id` — ID konwersacji, do której użytkownik należy.
- `user_id` — ID użytkownika biorącego udział w konwersacji.

#### 5. Tabela `groups` (opcjonalna)

Jeżeli chcesz przechowywać dodatkowe informacje o grupach (np. opis, avatar), możesz stworzyć tabelę `groups`.

```sql
CREATE TABLE groups (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Dodatkowo, możesz dodać kolumnę `group_id` w tabeli `conversations` do połączenia tych dwóch tabel:

```sql
ALTER TABLE conversations ADD COLUMN group_id uuid REFERENCES groups(id);
```

### Połączenia między tabelami

Oto, jak te tabele są ze sobą połączone:

- `users` ⇔ `participants` ⇔ `conversations`: relacja wielu do wielu, użytkownik może uczestniczyć w wielu konwersacjach.
- `conversations` ⇔ `messages`: każda konwersacja może mieć wiele wiadomości.
- `messages` ⇔ `users`: każda wiadomość jest wysyłana przez jednego użytkownika.
- `groups` ⇔ `conversations`: każda grupa może mieć przypisaną jedną konwersację grupową.

### Implementacja chat w Next.js

Aby zaimplementować chat w Next.js z Supabase, wykonaj następujące kroki:

1. **Utwórz tabele w Supabase**: Skorzystaj z panelu Supabase lub wykonaj powyższe zapytania SQL w Supabase Studio, aby stworzyć tabele.

2. **Skonfiguruj Supabase Client w Next.js**:
   Stwórz instancję klienta Supabase w Next.js, aby móc korzystać z API.

   ```javascript
   import { createClient } from "@supabase/supabase-js"

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   export const supabase = createClient(supabaseUrl, supabaseKey)
   ```

3. **Implementuj funkcjonalność czatu**:
   - **Utwórz nowe konwersacje** (grupowe lub p2p).
   - **Dodawaj wiadomości** do konwersacji.
   - **Obsługuj połączenia na żywo** (subskrypcje Supabase) do aktualizacji wiadomości w czasie rzeczywistym.

### Dodatkowe funkcje

- **Subskrypcje na zmiany w wiadomościach**: Możesz nasłuchiwać na nowe wiadomości w ramach konwersacji, korzystając z Supabase Realtime.

```javascript
const messageSubscription = supabase
	.from("messages")
	.on("INSERT", (payload) => {
		console.log("Nowa wiadomość:", payload.new)
	})
	.subscribe()
```

- **Obsługa powiadomień push**: Aby powiadomić użytkowników o nowych wiadomościach, możesz użyć powiadomień push za pomocą PWA (Progressive Web Apps).

To podstawowa struktura i kroki do stworzenia czatu w Next.js z Supabase. Możesz ją rozszerzać o dodatkowe funkcjonalności, takie jak multimedia, szyfrowanie wiadomości, reakcje na wiadomości, itd.
