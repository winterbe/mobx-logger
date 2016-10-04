export interface IMobXLoggerConfig {
    predicate?: () => boolean,
    action?: boolean;
    reaction?: boolean;
    transaction?: boolean;
    compute?: boolean;
}
export function enableLogging(config: IMobXLoggerConfig): void
