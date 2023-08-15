 'use client'
| import { useState } from 'react';
   :          ^^^^^^^^
 2 | import { FaShoppingCart } from 'react-icons/fa';
 3 | import Popup from 'reactjs-popup';
 3 | import 'reactjs-popup/dist/index.css';
   `----

Maybe one of these should be marked as a client entry with "use client":       
  ./components\ProductCard.tsx
  ./components\index.ts
  ./components\Navbar.tsx
  ./app\layout.tsx