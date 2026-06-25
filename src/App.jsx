import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Patches from "./pages/Patches";
import Playground from "./pages/Playground";
import Settings from "./pages/Settings";
import About from "./pages/About";

import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import RootProvider from "./providers/root";

function App() {
  return (
    <BrowserRouter basename='/my-app'>
      <RootProvider>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />

          <div className='flex h-full w-full flex-col'>
            <Navbar />
            <main className='castor-grid-bg flex-1 overflow-y-auto overflow-x-hidden'>
              <Routes>
                <Route exact path='*' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/patches' element={<Patches />} />
                <Route path='/playground' element={<Playground />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </RootProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
