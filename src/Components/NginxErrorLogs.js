import React, { useState } from 'react';

export default function NginxErrorLogs() {

    const [logs] = useState([
        '2024/04/12 10:00:00 [error] 1234#0: *1 open() "/var/www/html/favicon.ico" failed (2: No such file or directory), client: 192.168.1.100, server',
        '2024/04/12 10:00:01 [error] 1234#0: *2 directory index of "/var/www/html/" is forbidden, client: 192.168.1.101, server: localhost',
        '2024/04/12 10:00:02 [error] 1234#0: *3 open() "/var/www/html/admin.php" failed (2: No such file or directory), client: 192.168.1.102, server',
        '2024/04/12 10:00:03 [error] 1234#0: *4 rewrite or internal redirection cycle while internally redirecting to "/index.php", server',
        '2024/04/12 10:00:04 [error] 1234#0: *5 upstream timed out (110: Connection timed out) header from upstream: "http://127.0.0.1:8080/data",',
        '2024/04/12 10:00:05 [error] 1234#0: *6 access forbidden by rule, client: 192.168.1.105, request: "GET /admin HTTP/1.1", host: "example.com"',
        '2024/04/12 10:00:06 [error] 1234#0: *7 connect() failed (111: Connection refused) upstream, client: 192.168.1.106, server: localhost,',
        '2024/04/12 10:00:07 [error] 1234#0: *8 recv() failed 104: Connect while reading response header from upstream, client: 192.168.1.107,',
        '2024/04/12 10:00:08 [error] 1234#0: *9 access forbidden by rule, server: localhost, request: "GET /secret HTTP/1.1", host: "example.com"',
        '2024/04/12 10:00:09 [error] 1234#0: *10 directory index of "/var/www/html/assets/" is forbidden,"GET /assets/ HTTP/1.1", host: "example.com"',
        '2024/04/12 10:00:10 [error] 1234#0: *11 FastCGI sent in: Division by zero in /var/www/html/script.php" on line upstream:host: "example.com"',
        '2024/04/12 10:00:11 [error] 1234#0: *12 rewrite or internal redirection cycle while internally server: localhost, host: "example.com"',
        '2024/04/12 10:00:12 [error] 1234#0: *13 open() "/var/www/html/missing.html" failed (2: No such file or directory), host: "example.com"',
        '2024/04/12 10:00:13 [error] 1234#0: *14 no live upstreams while connecting to upstream, client: 192.168.1.113, host: "example.com"',
        '2024/04/12 10:00:14 [error] 1234#0: *15 lua entry thread aborted: /usr/local/openresty/nginx/conf/lua/client: 192.168.1.114, server: ',
        '2024/04/12 10:00:15 [error] 1234#0: *16 open() "/var/www/html/config.php" failed, "GET /config.php HTTP/1.1", host: "example.com"',
        '2024/04/12 10:00:16 [error] 1234#0: *17 directory index of "/var/www/html/" is forbidden, client: 192.168.1.116, host: "example.com"',
        '2024/04/12 10:00:17 [error] 1234#0: *18 upstream prematurely closed connection while upstream, client: 192.168.1.117, server: localhost,',
        '2024/04/12 10:00:18 [error] 1234#0: *19 connect() failed (111: Connection refused) upstream, client: 192.168.1.118, server: localhost,',
        '2024/04/12 10:00:19 [error] 1234#0: *20 SSL_do_handshake() failed (SSL: error:14094410:SSL:sslv3 alert handshake failure:SSL alert number 40)',
        '2024/04/12 10:00:20 [error] 1234#0: *21 FastCGI sent in stderr: "Primary script unknown" response header from upstream, client: 192.168.1.120,',
        '2024/04/12 10:00:21 [error] 1234#0: *22 open() "/var/www/html/.htaccess" failed (2: No such file or directory), server: localhost,',
        '2024/04/12 10:00:22 [error] 1234#0: *23 lua entry thread aborted: runtime error: /usr/local/openresty/nginx/conf/lua/script \'res_headers\'',
        '2024/04/12 10:00:23 [error] 1234#0: *24 open() "/var/www/html/wp-admin/install.php" failed (2: No such file or directory), server: localhost,',
        '2024/04/12 10:00:24 [error] 1234#0: *25 access forbidden by rule, client: 192.168.1.124, request: "GET /admin HTTP/1.1", host: "example.com"'
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
            <h2>Nginx Error Logs</h2>
            <ul className="logList error">
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
