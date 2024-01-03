import './globals.css'
import {TodosProvider} from "@/store/todos";

export default function RootLayout({children}: { children: React.ReactNode}) {
    return (
        <html lang="en">
        <body>
            <TodosProvider>
                {children}
            </TodosProvider>
        </body>
        </html>
    )
}







