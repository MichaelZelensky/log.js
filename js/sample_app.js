$(function () {
    log.log('');
    log.log('');
    log.log('===================================');
    log.log('  log.js sample output: ');
    log.log('===================================');
    log.time('log example execution time');
    log.group('log group example');
    log.log('This is log.log() example');
    log.error('This is log.error() example');
    log.warn('This is log.warn() example');
    log.info('This is log.info() example');
    log.groupEnd('This is log.log() example');
    log.timeEnd('log example execution time');
    log.log('===================================');
    log.log('');

});