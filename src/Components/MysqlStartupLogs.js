import React, { useState } from 'react';

export default function MysqlStartupLogs() {
    
    const [logs] = useState([
        '2024-04-12T10:00:00.000Z [Note] [Server] Server version: 8.0.28 MySQL Community Server - GPL',
        '2024-04-12T10:00:01.000Z [Note] [Server] InnoDB: Buffer pool(s) load completed at 220412 10:00:01',
        '2024-04-12T10:00:02.000Z [Note] [Server] socket: /var/run/mysqld/mysqld.sock port:3306 MySQL-GPL.',
        '2024-04-12T10:00:03.000Z [Note] [Server] Schema name `mysql` changed to `mysql_old`',
        '2024-04-12T10:00:04.000Z [Note] [Server] Event Scheduler: Loaded 0 events',
        '2024-04-12T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-12T10:00:06.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-12T10:00:07.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-13T10:00:00.000Z [Note] [Server] Server version: 8.0.28 MySQL Community Server - GPL',
        '2024-04-13T10:00:01.000Z [Note] [Server] InnoDB: Buffer pool(s) load completed at 220413 10:00:01',
        '2024-04-13T10:00:02.000Z [Note] [Server] socket: /var/run/mysqld/mysqld.sock  port: 3306 GPL.',
        '2024-04-13T10:00:03.000Z [Note] [Server] Schema name `mysql` changed to `mysql_old`',
        '2024-04-13T10:00:04.000Z [Note] [Server] Event Scheduler: Loaded 0 events',
        '2024-04-13T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-13T10:00:06.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-13T10:00:07.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete',
        '2024-04-14T10:00:00.000Z [Note] [Server] Server version: 8.0.28 MySQL Community Server - GPL',
        '2024-04-14T10:00:01.000Z [Note] [Server] InnoDB: Buffer pool(s) load completed at 220414 10:00:01',
        '2024-04-14T10:00:02.000Z [Note] [Server] socket: /var/run/mysqld/mysqld.sock  port: 3306  MySQL.',
        '2024-04-14T10:00:03.000Z [Note] [Server] Schema name `mysql` changed to `mysql_old`',
        '2024-04-14T10:00:04.000Z [Note] [Server] Event Scheduler: Loaded 0 events',
        '2024-04-14T10:00:05.000Z [Note] [Server] /usr/sbin/mysqld: Normal shutdown',
        '2024-04-14T10:00:06.000Z [Note] [Server] Event Scheduler: Purging the queue. 0 events',
        '2024-04-14T10:00:07.000Z [Note] [Server] /usr/sbin/mysqld: Shutdown complete'
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
            <h2>MySQL Startup Logs</h2>
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
