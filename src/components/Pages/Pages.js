import React, { useEffect, useState } from 'react'
import './pages.css'

function Pages({ datasL, setPageD, pageD, setId }) {
    console.log(datasL)
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const counterPages = L => {
            let num = L / 5;
            const pages = [];
            num = Math.ceil(num);
            for (let i = 1; i < num; i++) {
                pages.push(i)
            }
            setPages(pages);
            setPage(pageD);
        };
        counterPages(datasL)
    }, [datasL, setPages, setPage, pageD])



    const filterpages = pages.slice(page * 4 - 4, page * 4);
    return (
        <ul className="pages">
            <li>
                <button
                    className={pageD === 1 ? "none" : ''}
                    onClick={() => {
                        setId('');
                        setPageD(pageD - 1)
                        if (pageD === filterpages.slice(0)[0]) {
                            setPage(page - 1);
                        }
                    }}>←</button>
            </li>
            {filterpages.map((page, i) => {
                return (
                    <li key={i}>
                        <button
                            className={page === pageD ? 'active' : ''}
                            onClick={() => {
                                setId('');
                                setPageD(page);
                            }}>{page}</button>
                    </li>
                )
            })}
            <li>
                <button
                    className={pageD === pages.slice(-1)[0] || datasL < 7 ? "none" : ''}
                    onClick={() => {
                        setId('');
                        setPageD(pageD + 1);
                        if (pageD === filterpages.slice(-1)[0]) {
                            setPage(page + 1);
                        }
                    }}>→</button>
            </li>
        </ul>
    )
}

export default Pages