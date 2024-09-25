import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <>
    <header className="bg-purple-800 flex text-white justify-around h-14 items-center">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Matheus Marcelino
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition duration-300">Início</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300 transition duration-300">Projetos</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};