import React, { useState } from 'react';

export default function ApacheAccessLogs() {

    const [logs] = useState([
        '192.168.2.20 - - [28/Jul/2006:10:27:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET / HTTP/1.0" 200 2216',
        '192.168.2.21 - - [28/Jul/2006:10:27:10 -0300] "GET /page1 HTTP/1.1" 200 1500',
        '10.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page2 HTTP/1.1" 404 2048',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page3 HTTP/1.1" 200 1024',
        '192.168.2.22 - - [28/Jul/2006:10:27:10 -0300] "GET /page4 HTTP/1.1" 200 4096',
        '10.0.0.2 - - [28/Jul/2006:10:22:04 -0300] "GET /page5 HTTP/1.1" 200 8192',
        '192.168.2.23 - - [28/Jul/2006:10:27:10 -0300] "GET /page6 HTTP/1.1" 200 3072',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page7 HTTP/1.1" 404 512',
        '10.0.0.3 - - [28/Jul/2006:10:22:04 -0300] "GET /page8 HTTP/1.1" 200 4096',
        '192.168.2.24 - - [28/Jul/2006:10:27:10 -0300] "GET /page9 HTTP/1.1" 200 2048',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page10 HTTP/1.1" 200 8192',
        '10.0.0.4 - - [28/Jul/2006:10:22:04 -0300] "GET /page11 HTTP/1.1" 404 1024',
        '192.168.2.25 - - [28/Jul/2006:10:27:10 -0300] "GET /page12 HTTP/1.1" 200 5120',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page13 HTTP/1.1" 200 2048',
        '10.0.0.5 - - [28/Jul/2006:10:22:04 -0300] "GET /page14 HTTP/1.1" 200 1024',
        '192.168.2.26 - - [28/Jul/2006:10:27:10 -0300] "GET /page15 HTTP/1.1" 200 4096',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page16 HTTP/1.1" 404 2048',
        '10.0.0.6 - - [28/Jul/2006:10:22:04 -0300] "GET /page17 HTTP/1.1" 200 8192',
        '192.168.2.27 - - [28/Jul/2006:10:27:10 -0300] "GET /page18 HTTP/1.1" 200 3072',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page19 HTTP/1.1" 200 512',
        '10.0.0.7 - - [28/Jul/2006:10:22:04 -0300] "GET /page20 HTTP/1.1" 200 2048',
        '192.168.2.28 - - [28/Jul/2006:10:27:10 -0300] "GET /page21 HTTP/1.1" 404 1024',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page22 HTTP/1.1" 200 5120',
        '10.0.0.8 - - [28/Jul/2006:10:22:04 -0300] "GET /page23 HTTP/1.1" 200 2048',
        '192.168.2.26 - - [28/Jul/2006:10:27:10 -0300] "GET /page15 HTTP/1.1" 200 4096',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page16 HTTP/1.1" 404 2048',
        '10.0.0.6 - - [28/Jul/2006:10:22:04 -0300] "GET /page17 HTTP/1.1" 200 8192',
        '192.168.2.27 - - [28/Jul/2006:10:27:10 -0300] "GET /page18 HTTP/1.1" 200 3072',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page19 HTTP/1.1" 200 512',
        '10.0.0.7 - - [28/Jul/2006:10:22:04 -0300] "GET /page20 HTTP/1.1" 200 2048',
        '192.168.2.28 - - [28/Jul/2006:10:27:10 -0300] "GET /page21 HTTP/1.1" 404 1024',
        '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET /page22 HTTP/1.1" 200 5120',
        '10.0.0.8 - - [28/Jul/2006:10:22:04 -0300] "GET /page23 HTTP/1.1" 200 2048',
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
            <h2>Apache Access Logs</h2>
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
