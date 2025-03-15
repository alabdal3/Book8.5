import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://vgslfobztmqmyanppaeq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnc2xmb2J6dG1xbXlhbnBwYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNjUxODcsImV4cCI6MjA1NzY0MTE4N30.REZVKh8ST8bkweVuw1uDK8y8cbnWe0bafodi57aGzP8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase.from('books').select('*');

    if (error) {
        console.error("Error fetching books:", error);
        return;
    }

    let bookList = document.getElementById('books');
    bookList.innerHTML = "";

    books.forEach(book => {
        let row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
        </tr>`;
        bookList.innerHTML += row;
    });
}

getBooks();