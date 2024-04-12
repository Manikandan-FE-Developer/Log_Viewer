import React, { useState } from 'react';

export default function ApacheErrorLogs() {
    const [logs] = useState([
        '[Mon Apr 12 10:15:02.348822 2024] :Request exceeded the limit of 10 internal redirects due to probable configuration error.',
        '[Mon Apr 12 10:16:45.159437 2024] :server reached MaxRequestWorkers setting, consider raising the MaxRequestWorkers setting',
        '[Mon Apr 12 10:17:32.752036 2024] [core:alert] [pid 12345:tid 67890] /path/to/file.php: failed to open stream: Permission denied',
        '[Mon Apr 12 10:18:10.480329 2024] [authz_core:error] AH01630: client denied by server configuration: /path/to/directory/',
        '[Mon Apr 12 10:19:05.642914 2024] [proxy:error]FCGI: attempt to connect to Unix domain socket /path/to/socket (localhost) failed',
        '[Mon Apr 12 10:20:15.291732 2024] [ssl:error] [pid 12345:tid 67890] ssl_stapling_init_cert: can\'t retrieve issuer certificate!',
        '[Mon Apr 12 10:21:20.004615 2024] [core:alert]/path/to/file.php: require_once():Failed opening required \'nonexistent_file.php\'',
        '[Mon Apr 12 10:22:30.671923 2024] [http2:error]has more demands in this regard and the currently selected mpm will just not do.',
        '[Mon Apr 12 10:23:45.556223 2024] [pid 12345:tid]Call to undefined function nonexistent_function()trace:\n#0 {main}\n  thrown',
        '[Mon Apr 12 10:24:55.337518 2024] [auth_digest:error] AH01796: AuthType Digest configured without corresponding module',
        '[Mon Apr 12 10:25:45.125751 2024] [proxy_fcgi:error] AH01079: failed to make connection to backend: httpd-UDS',
        '[Mon Apr 12 10:26:35.945912 2024] [http:warn] server certificate does NOT include an ID which matches the server name',
        '[Mon Apr 12 10:27:25.758204 2024] [core:error] Use LimitInternalRecursion to increase the limit if necessary.',
        '[Mon Apr 12 10:28:15.583420 2024] [mpm_prefork:error] server consider raising the MaxRequestWorkers setting',
        '[Mon Apr 12 10:29:02.292715 2024] [core:alert] /path/to/file.php: failed to open stream: Permission denied',
        '[Mon Apr 12 10:30:10.109820 2024] [authz_core:error] AH01630: client denied by server configuration: /path/to/directory/',
        '[Mon Apr 12 10:31:25.832314 2024] [proxy:error](13)Permission denied:AH02454: attempt to connect to Unix domain socket failed',
        '[Mon Apr 12 10:32:35.480615 2024] [ssl:error] [pid 12345:tid 67890] ssl_stapling_init_cert: can\'t retrieve issuer certificate!',
        '[Mon Apr 12 10:33:40.304710 2024] [core:alert] [pid 12345:tid 67890]  /path/to/file.php: require_once(): Failed opening required',
        '[Mon Apr 12 10:34:55.087923 2024] [http2:error] The mpm module (prefork.c) is not supported by mod_http2. This is an advisory warning.',
        '[Mon Apr 12 10:35:45.902124 2024] [php7:error] PHP Fatal error: in /path/to/file.php:23\nStack trace:\n#0 {main}\n  thrown',
        '[Mon Apr 12 10:36:35.683318 2024] [auth_digest:error] [pid 12345:tid  AH01796: AuthType Digest configured without corresponding module',
        '[Mon Apr 12 10:37:25.510520 2024] [proxy_fcgi:error] [pid 12345:tid ]  AH01079: failed to make connection to backend: httpd-UDS',
        '[Mon Apr 12 10:38:15.341721 2024] [http:warn]  server certificate does NOT include an ID which matches the server name',
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
            <h2>Apache Error Logs</h2>
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
