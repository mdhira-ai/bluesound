import asyncio
from bleak import BleakScanner
import sys

async def scan_devices():
    while True:
        devices = await BleakScanner.discover()

        d = []

        for device in devices:
            

            d.append({
                "name": device.name or 'N/A',
                "address": device.address,
            })



        print(d)
        sys.stdout.flush()
        await asyncio.sleep(5)


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(scan_devices())


