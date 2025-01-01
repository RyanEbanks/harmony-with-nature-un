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
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='mt-[160px]'>
                <h1 className='text-gray-800 text-6xl font-bold border-l-[6px] pl-8 border-[#004d6f]'>Library</h1>
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
            <div className='my-12'>
                <div className='max-w-xl mx-auto'>
                    <h2 className='text-sm font-semibold tracking-wider text-gray-700 text-center mb-4'>EXPLORE BY</h2>
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='Search books...'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#40916C] focus:border-transparent transition duration-200 outline-none'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className='flex justify-between items-center max-w-2xl mx-auto mb-8'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='px-5 py-2.5 bg-[#40916C] hover:bg-[#265741] text-white rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Previous
                </button>
                <p className='text-gray-700'>Page {currentPage} of {totalPages}</p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-5 py-2.5 bg-[#40916C] hover:bg-[#265741] text-white rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Next
                </button>
            </div>

            {/* Book List */}
            <div className='max-w-4xl mx-auto'>
                <ul className='space-y-6'>
                    {currentBooks.map((book, index) => (
                        <li key={index} className='bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200'>
                            <div className='p-4 border-b'>
                                <h2 className='text-lg font-semibold text-gray-800'>{book.title}</h2>
                            </div>
                            <div className='p-4'>
                                <p className='text-gray-600'>{book.author} &#40;{book.year}&#41; - {book.publisher} - {book.country}</p>
                                <div className='flex gap-3 mt-4'>
                                    <span className='inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800'>
                                        {book.type}
                                    </span>
                                    <span className='inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800'>
                                        <TbWorld className='mr-1.5' />
                                        {book.language}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Pagination - Same as top */}
            <div className='flex justify-between items-center max-w-2xl mx-auto my-12'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='px-5 py-2.5 bg-[#40916C] hover:bg-[#265741] text-white rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Previous
                </button>
                <p className='text-gray-700'>Page {currentPage} of {totalPages}</p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-5 py-2.5 bg-[#40916C] hover:bg-[#265741] text-white rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Library;
