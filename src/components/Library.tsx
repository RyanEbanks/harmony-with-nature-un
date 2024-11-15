import React, { useEffect, useState } from 'react';
import '../App.css';
import { libraryData } from '../library-resources';
import { TbWorld } from "react-icons/tb";
import line from '../images/Rectangle 10.svg'

// Definining the type for the book information
interface Book {
    title: string;
    author: string;
    year: number;
    publisher: string;
    country: string;
    type: string;
    language: string;
}

function Library() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        return setBooks(libraryData);
    }, []);

    return (
        <div className='mx-10'>
            <div className='flex mt-10 px-20 text-xl'>
                <p><span className='text-6xl'>T</span>he following Library offers extensive written and audio-visual material focusing on a
                    non-anthropocentric view of the world derived from analysis, reports and research in the
                    fields of ethics, science, ecological economics, literature, politics, social sciences,
                    philosophy, deep ecology, systems thinking and Earth jurisprudence. The information contained
                    herein supports the belief that we must move away from a human-centered worldview and build
                    governance structures in which Nature is treated in partnership with humankind.</p>
            </div>
            <div className='flex mt-10 mb-10 px-20'>
                <ul>
                    {books.map((book, index) => (
                        <li key={index} className='mt-2 mb-5'>
                            <div className='bg-gray-200 py-2'>
                                <h2 className='text-lg'>{book.title}</h2>
                            </div>
                            <div className='py-2'>
                                <p className='text-base'>{book.author} &#40;{book.year}&#41; - {book.publisher} - {book.country}</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='flex text-sm mr-1 p-2 font-semibold bg-gray-200 w-28 justify-center'>{book.type}</p>
                                <p className='flex flex-row text-sm ml-1 p-2 font-semibold bg-gray-200 w-28 justify-center'>
                                    <span className='pt-0.5 px-0.5'><TbWorld /></span>
                                    {book.language}</p>
                            </div>
                            <img className='mt-5' alt='Harmony with nature institue logo' src={line}></img>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Library;