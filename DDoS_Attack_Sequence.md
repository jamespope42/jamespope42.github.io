sequenceDiagram
    participant Attacker
    participant BotNet
    participant WebServer
    participant Firewall

    Attacker->>BotNet: Command to initiate DDoS attack
    BotNet->>WebServer: Flood with excessive requests
    WebServer->>Firewall: Alert: Overload detected
    Firewall->>BotNet: Block malicious traffic
    Firewall->>Attacker: Attempt trace and block

## Description of SD
1. The Attacker: 
- Starts attack by sending commands to BotNet
- Represents entity controlling malicious activity. 
2. The BotNet:
- A group of compromised systems under the attacker's control.
- Executes the attack by sending a lot of requests to the WebServer.
3. The WebServer:
- The target of the attack.
- Struggles to handle the overwhelming traffic and sends alert to Firewall about the unusual activity.
4. The Firewall:
- Is defense mechanism in place.
- Analyzes the traffic and identifies malicious patterns.
- Blocks traffic from the BotNet and tries to trace the Attacker 

## Steps in DDoS attack
1. Attacker commands BotNet to initiate a attack
2. BotNet sends an excessive number of requests to WebServer which overwhelms its resources and causes denial of service for actual users.
3. WebServer detects overload and alerts Firewall
4. Firewall analyzes traffic, blocks malicious requests, and tries to trace the soure of attack.

## Picture of Sequence Diagram 
![Sequence Diagram](https://supabase.mermaidchart.com/storage/v1/object/public/chatgpt-diagrams/2025-01-23/5fb33b67-a28f-447e-85d4-32f8660d96df.png)
