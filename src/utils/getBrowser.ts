const browserCodes = ['Chrome', 'Firefox', 'Safari', 'Edge'] as const;
type BrowserCode = typeof browserCodes[number] | 'otherBrowser';

const browsers = ['chrome', 'firefox', 'safari', 'edge'] as const;
type Browser = typeof browsers[number] | 'otherBrowser';

const BrowserMap: Record<BrowserCode, Browser> = {
    Chrome: 'chrome',
    Firefox: 'firefox',
    Safari: 'safari',
    Edge: 'edge',
    otherBrowser: 'otherBrowser',
}

export const getBrowser = ():Browser  => BrowserMap[browserCodes.find((browserCode) => navigator.userAgent.includes(browserCode)) || 'otherBrowser'] ;
