import React, { useState } from 'react';

export default function NginxAccessLogs() {

    const [logs] = useState([
        '192.168.1.119 - - [12/Apr/2024:10:00:19 +0000] "GET /blog/post-11 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.120 - - [12/Apr/2024:10:00:20 +0000] "GET /blog/post-12 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.121 - - [12/Apr/2024:10:00:21 +0000] "GET /blog/post-13 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.122 - - [12/Apr/2024:10:00:22 +0000] "GET /blog/post-14 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.100 - - [12/Apr/2024:10:00:00 +0000] "GET /index.html HTTP/1.1" 200 1024 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.101 - - [12/Apr/2024:10:00:01 +0000] "GET /about.html HTTP/1.1" 200 2048 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.102 - - [12/Apr/2024:10:00:02 +0000] "GET /images/logo.png HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.103 - - [12/Apr/2024:10:00:03 +0000] "GET /styles/main.css HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.104 - - [12/Apr/2024:10:00:04 +0000] "GET /scripts/script.js HTTP/1.1" 200 8192 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.105 - - [12/Apr/2024:10:00:05 +0000] "GET /favicon.ico HTTP/1.1" 404 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.106 - - [12/Apr/2024:10:00:06 +0000] "POST /submit_form HTTP/1.1" 302 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.107 - - [12/Apr/2024:10:00:07 +0000] "GET /download/file.zip HTTP/1.1" 200 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.108 - - [12/Apr/2024:10:00:08 +0000] "GET /product?id=12345 HTTP/1.1" 200 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.109 - - [12/Apr/2024:10:00:09 +0000] "GET /blog/post-1 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.110 - - [12/Apr/2024:10:00:10 +0000] "GET /blog/post-2 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.111 - - [12/Apr/2024:10:00:11 +0000] "GET /blog/post-3 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.112 - - [12/Apr/2024:10:00:12 +0000] "GET /blog/post-4 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.113 - - [12/Apr/2024:10:00:13 +0000] "GET /blog/post-5 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.114 - - [12/Apr/2024:10:00:14 +0000] "GET /blog/post-6 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.115 - - [12/Apr/2024:10:00:15 +0000] "GET /blog/post-7 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.116 - - [12/Apr/2024:10:00:16 +0000] "GET /blog/post-8 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.117 - - [12/Apr/2024:10:00:17 +0000] "GET /blog/post-9 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.118 - - [12/Apr/2024:10:00:18 +0000] "GET /blog/post-10 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.119 - - [12/Apr/2024:10:00:19 +0000] "GET /blog/post-11 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.120 - - [12/Apr/2024:10:00:20 +0000] "GET /blog/post-12 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.121 - - [12/Apr/2024:10:00:21 +0000] "GET /blog/post-13 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.122 - - [12/Apr/2024:10:00:22 +0000] "GET /blog/post-14 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        '192.168.1.123 - - [12/Apr/2024:10:00:23 +0000] "GET /blog/post-15 HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    ]);    

    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 13;

    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <h2>Nginx Access Logs</h2>
            <ul className="logList access">
                {currentLogs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage}</span>
                <button onClick={nextPage} disabled={indexOfLastLog >= logs.length}>Next</button>
            </div>
        </div>
    );
}
