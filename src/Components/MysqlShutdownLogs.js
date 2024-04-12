import React, { useState } from 'react';

export default function MysqlShutdownLogs() {
    
    const [logs] = useState([
        '2024-04-12T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-12T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-12T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-13T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-13T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-13T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-14T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-14T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-14T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-15T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-15T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-15T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-16T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-16T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-16T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-17T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-17T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-17T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-18T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-18T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-18T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-19T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-19T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-19T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-20T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-20T10:00:07.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-20T10:00:08.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete'
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
            <h2>MySQL Shutdown Logs</h2>
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
