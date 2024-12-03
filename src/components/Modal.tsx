import React from 'react'

function Modal() {
    return (
        <div className='flex flex-row bg-[#f0910c80] items-center justify-center'>
            <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                <img className='my-1 h-[30px] w-[70px]' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
            </a>
            <a className='my-1 underline text-[#0069b4]' href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>Visit our Affiliate</a>
        </div>
    )
}

export default Modal;