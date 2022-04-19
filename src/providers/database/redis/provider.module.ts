import { IRedisConfigService } from '@config/cache/redis/config.interface'
import { RedisConfigModule } from '@config/cache/redis/config.module'
import { RedisModule } from '@nestjs-modules/ioredis'
import { Module } from '@nestjs/common'

@Module({
    imports: [
        RedisModule.forRootAsync({
            imports: [RedisConfigModule],
            useFactory: async function (redisConfigService: IRedisConfigService) {
                return {
                    config: {
                        host: redisConfigService.host,
                        port: redisConfigService.port,
                        password: redisConfigService.password,
                    },
                }
            },
            inject: [IRedisConfigService],
        }),
    ],
})
export class RedisDatabaseProviderModule {}
