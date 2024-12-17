import React, { useEffect, useState } from 'react';
import '../App.css';
import { libraryData } from '../library-resources';
import { TbWorld } from 'react-icons/tb';
// import line from '../images/Rectangle 10.svg'

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
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [booksPerPage] = useState<number>(30);

    useEffect(() => {
        setBooks(libraryData as Book[]);
    }, []);

    // Filter books based on search query
    const filteredBooks = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.publisher.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    // Pagination logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='w-[90%] lg:w-3/4 mx-auto'>
            <div className='mt-[160px]'>
                <h1 className='text-gray-400 text-6xl font-bold border-l-[6px] pl-8 border-[#004d6f]'>Library</h1>
            </div>
            <div className='flex mt-5 lg:pl-10 text-lg lg:text-xl'>
                <p>The following Library offers extensive written and audio-visual material focusing on a
                    non-anthropocentric view of the world derived from analysis, reports and research in the
                    fields of ethics, science, ecological economics, literature, politics, social sciences,
                    philosophy, deep ecology, systems thinking and Earth jurisprudence. The information contained
                    herein supports the belief that we must move away from a human-centered worldview and build
                    governance structures in which Nature is treated in partnership with humankind.</p>
            </div>
            {/* Search Bar */}
            <div className='my-20 flex flex-col items-center'>
                <h1 className='font-semibold tracking-widest text-center my-5'>EXPLORE BY: </h1>
                <input
                    type='text'
                    placeholder='Search books...'
                    className='w-1/4 px-auto py-2 border rounded'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Pagination Controls */}
            <div className='flex justify-between mt-5 w-3/4 items-center mx-auto'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='px-4 py-2 bg-[#40916C] hover:bg-[#265741] text-white rounded'
                >
                    Previous
                </button>
                <p className='self-center'>Page {currentPage} of {totalPages}</p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 bg-[#40916C] hover:bg-[#265741] text-white rounded'
                >
                    Next
                </button>
            </div>

            {/* Book List */}
            <div className='flex mt-10 mb-10 lg:px-20 w-[70%] mx-auto'>
                <ul>
                    {currentBooks.map((book, index) => (
                        <li key={index} className='mt-2 mb-5'>
                            <div className='bg-gray-200 py-2 pl-2'>
                                <h2 className='text-base'>{book.title}</h2>
                            </div>
                            <div className='py-2'>
                                <p className='text-sm'>{book.author} &#40;{book.year}&#41; - {book.publisher} - {book.country}</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='flex text-xs lg:text-sm mr-1 p-2 font-semibold bg-gray-200 w-28 justify-center'>{book.type}</p>
                                <p className='flex flex-row text-xs ml-1 p-2 font-semibold bg-gray-200 w-28 justify-center'>
                                    <span className='pt-0.5 px-0.5'><TbWorld /></span>
                                    {book.language}</p>
                            </div>
                            <img className='mt-5' alt='Harmony with nature institute logo' src='/images/Rectangle 10.svg'></img>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pagination Controls */}
            <div className='flex justify-between mt-5 mb-[96px] w-3/4 items-center mx-auto'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='px-4 py-2 bg-[#40916C] hover:bg-[#265741] text-white rounded'
                >
                    Previous
                </button>
                <p className='self-center'>Page {currentPage} of {totalPages}</p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 bg-[#40916C] hover:bg-[#265741] text-white rounded'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Library;
