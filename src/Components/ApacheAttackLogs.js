import React, { useState } from 'react';

export default function ApacheAttackLogs() {
    const [logs] = useState([
        '[Mon Apr 12 10:15:02.348822 2024] [authz_core:error] [pid 12345:tid 67890] client denied by server configuration: /admin/phpmyadmin',
        '[Mon Apr 12 10:16:45.159437 2024] [core:alert] [pid 12345:tid 67890] [client 192.168.1.2:12345] /etc/passwd%00',
        '[Mon Apr 12 10:17:32.752036 2024] [core:error] [pid 12345:tid 67890] Invalid URI in request GET /../../../../../../../../etc/passwd',
        '[Mon Apr 12 10:18:10.480329 2024] [core:alert] [pid 12345:tid 67890] access to /secretarea denied (referer: http://malicious.com)',
        '[Mon Apr 12 10:19:05.642914 2024] [core:alert] [pid 12345:tid 67890] seg fault or similar nasty error detected in the parent process',
        '[Mon Apr 12 10:20:15.291732 2024] [core:alert] [pid 12345:tid 67890] No protocol handler was valid for the URL /malicious_payload',
        '[Mon Apr 12 10:21:20.004615 2024] [core:error] [pid 12345:tid 67890] contains invalid characters, aborting request',
        '[Mon Apr 12 10:22:30.671923 2024] [authz_core:error] [pid 12345:tid 67890] client denied by server configuration: /admin/phpmyadmin',
        '[Mon Apr 12 10:23:45.556223 2024] [core:alert] [pid 12345:tid 67890] access to /admin/db denied (referer: http://malicious.com)',
        '[Mon Apr 12 10:24:55.337518 2024] [core:error] [pid 12345:tid 67890] File does not exist: /var/www/html/.git/config',
        '[Mon Apr 12 10:25:45.125751 2024] [core:alert] [pid 12345:tid 67890] attempt to invoke directory as script: /var/www/html/',
        '[Mon Apr 12 10:26:35.945912 2024] [core:error] [pid 12345:tid 67890] No matching DirectoryIndex (index.php,index.html) found',
        '[Mon Apr 12 10:27:25.758204 2024] [core:alert] [pid 12345:tid 67890] it does nothing and may trigger an error response',
        '[Mon Apr 12 10:28:15.583420 2024] [core:error] [pid 12345:tid 67890] file permissions deny server access: /var/www/html/phpinfo.php',
        '[Mon Apr 12 10:29:02.292715 2024] [core:alert] [pid 12345:tid 67890] client denied by server configuration: /var/www/html/.git/config',
        '[Mon Apr 12 10:30:10.109820 2024] [core:error] [pid 12345:tid 67890] File does not exist: /var/www/html/admin_panel',
        '[Mon Apr 12 10:31:25.832314 2024] [core:alert] [pid 12345:tid 67890] File does not exist: /var/www/html/.env',
        '[Mon Apr 12 10:32:35.480615 2024] [core:error] [pid 12345:tid 67890] file permissions deny server access: /var/www/html/config.php',
        '[Mon Apr 12 10:33:40.304710 2024] [core:alert] [pid 12345:tid 67890] client denied by server configuration: /etc/passwd',
        '[Mon Apr 12 10:34:55.087923 2024] [core:error] [pid 12345:tid 67890] File does not exist: /var/www/html/dbadmin',
        '[Mon Apr 12 10:35:45.902124 2024] [core:alert] [pid 12345:tid 67890] client denied by server configuration: /etc/shadow',
        '[Mon Apr 12 10:36:35.683318 2024] [core:error] [pid 12345:tid 67890] file permissions deny server access: /var/www/html/config.inc.php',
        '[Mon Apr 12 10:37:25.510520 2024] [core:alert] [pid 12345:tid 67890] client denied by server configuration: /usr/share/phpmyadmin/',
        '[Mon Apr 12 10:27:25.758204 2024] [core:alert] [pid 12345:tid 67890] it does nothing and may trigger an error response',
        '[Mon Apr 12 10:28:15.583420 2024] [core:error] [pid 12345:tid 67890] file permissions deny server access: /var/www/html/phpinfo.php',
        '[Mon Apr 12 10:29:02.292715 2024] [core:alert] [pid 12345:tid 67890] client denied by server configuration: /var/www/html/.git/config',
        '[Mon Apr 12 10:30:10.109820 2024] [core:error] [pid 12345:tid 67890] File does not exist: /var/www/html/admin_panel',
        '[Mon Apr 12 10:38:15.341721 2024] [core:error] [pid 12345:tid 67890] File does not exist: /var/www/html/pma',
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
            <h2>Apache Attack Logs</h2>
            <ul className="logList attack">
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
