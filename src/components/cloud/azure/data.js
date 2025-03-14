export const questionsData = {
    "Title": "Azure Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Medium",
        "Category": "Networking",
        "Question": "How do you set up a VPN connection between an on-premises network and Azure?",
        "Answer": [
          "To set up a VPN connection between an on-premises network and Azure, you need to create a Virtual Network Gateway in Azure and configure your on-premises VPN device.",
          "You will also need to create a Local Network Gateway in Azure to represent your on-premises network."
        ],
        "Code": [
          "// Example of creating a Virtual Network Gateway using Azure CLI",
          "az network vnet-gateway create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myVnetGateway \\",
          "  --public-ip-address myVnetGatewayIP \\",
          "  --vnet myVnet \\",
          "  --gateway-type Vpn \\",
          "  --vpn-type RouteBased \\",
          "  --sku VpnGw1 \\",
          "  --no-wait"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How do you implement role-based access control (RBAC) in Azure?",
        "Answer": [
          "Role-based access control (RBAC) in Azure allows you to manage access to Azure resources by assigning roles to users, groups, and applications.",
          "You can use built-in roles or create custom roles to define the permissions."
        ],
        "Code": [
          "// Example of assigning a role to a user using Azure CLI",
          "az role assignment create \\",
          "  --assignee user@domain.com \\",
          "  --role Contributor \\",
          "  --scope /subscriptions/{subscription-id}/resourceGroups/myResourceGroup"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Storage",
        "Question": "How do you implement geo-redundant storage (GRS) in Azure?",
        "Answer": [
          "Geo-redundant storage (GRS) in Azure replicates your data to a secondary region to protect against regional outages.",
          "You can enable GRS when creating a storage account or update the replication setting of an existing storage account."
        ],
        "Code": [
          "// Example of creating a storage account with GRS using Azure CLI",
          "az storage account create \\",
          "  --name mystorageaccount \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus \\",
          "  --sku Standard_GRS"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "DevOps",
        "Question": "How do you set up a CI/CD pipeline in Azure DevOps for a .NET application?",
        "Answer": [
          "To set up a CI/CD pipeline in Azure DevOps for a .NET application, you need to create a new pipeline, configure the build and release stages, and define the tasks for building, testing, and deploying the application."
        ],
        "Code": [
          "// Example of an Azure Pipelines YAML file for a .NET application",
          "trigger:",
          "  - main",
          "pool:",
          "  vmImage: 'ubuntu-latest'",
          "steps:",
          "  - task: UseDotNet@2",
          "    inputs:",
          "      packageType: 'sdk'",
          "      version: '5.x'",
          "  - script: dotnet build --configuration Release",
          "    displayName: 'Build project'",
          "  - script: dotnet test --no-build --configuration Release",
          "    displayName: 'Run tests'",
          "  - task: PublishBuildArtifacts@1",
          "    inputs:",
          "      PathtoPublish: '$(Build.ArtifactStagingDirectory)'",
          "      ArtifactName: 'drop'"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Database",
        "Question": "How do you migrate an on-premises SQL Server database to Azure SQL Database?",
        "Answer": [
          "To migrate an on-premises SQL Server database to Azure SQL Database, you can use the Azure Database Migration Service (DMS) or the Data Migration Assistant (DMA).",
          "These tools help you assess, plan, and execute the migration process."
        ],
        "Code": [
          "// Example of using Azure Database Migration Service (DMS)",
          "az dms create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myDms \\",
          "  --location eastus \\",
          "  --sku-name Premium_4vCores \\",
          "  --subnet /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "AI and Machine Learning",
        "Question": "How do you deploy a machine learning model to Azure Kubernetes Service (AKS)?",
        "Answer": [
          "To deploy a machine learning model to Azure Kubernetes Service (AKS), you need to create an AKS cluster, build a Docker image for your model, push the image to Azure Container Registry (ACR), and create a deployment in AKS using the image."
        ],
        "Code": [
          "// Example of deploying a model to AKS using Azure CLI",
          "az aks create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myAKSCluster \\",
          "  --node-count 1 \\",
          "  --enable-addons monitoring \\",
          "  --generate-ssh-keys",
          "// Build and push Docker image",
          "docker build -t myacr.azurecr.io/mymodel:latest .",
          "docker push myacr.azurecr.io/mymodel:latest",
          "// Create deployment in AKS",
          "kubectl create deployment mymodel-deployment --image=myacr.azurecr.io/mymodel:latest"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Monitoring",
        "Question": "How do you set up monitoring and alerts for an Azure application?",
        "Answer": [
          "To set up monitoring and alerts for an Azure application, you can use Azure Monitor, which provides a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.",
          "You can create alerts based on metrics, logs, and activity logs."
        ],
        "Code": [
          "// Example of creating a metric alert using Azure CLI",
          "az monitor metrics alert create \\",
          "  --name myAlert \\",
          "  --resource-group myResourceGroup \\",
          "  --scopes /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM \\",
          "  --condition \"avg Percentage CPU > 80\" \\",
          "  --description \"Alert when CPU usage is over 80%\" \\",
          "  --action-group myActionGroup"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How do you implement Azure Key Vault to manage secrets and keys?",
        "Answer": [
          "Azure Key Vault is a cloud service for securely storing and accessing secrets, keys, and certificates.",
          "You can use it to manage access to sensitive information and ensure that your applications follow best security practices."
        ],
        "Code": [
          "// Example of creating a Key Vault and adding a secret using Azure CLI",
          "az keyvault create \\",
          "  --name myKeyVault \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus",
          "az keyvault secret set \\",
          "  --vault-name myKeyVault \\",
          "  --name MySecret \\",
          "  --value MySecretValue"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Compute",
        "Question": "How do you scale an Azure App Service plan?",
        "Answer": [
          "To scale an Azure App Service plan, you can use the Azure portal, Azure CLI, or Azure PowerShell to change the pricing tier or configure autoscaling rules based on metrics such as CPU usage or request count."
        ],
        "Code": [
          "// Example of scaling an App Service plan using Azure CLI",
          "az appservice plan update \\",
          "  --name myAppServicePlan \\",
          "  --resource-group myResourceGroup \\",
          "  --sku P1v2"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Networking",
        "Question": "How do you configure Azure Application Gateway for load balancing and SSL termination?",
        "Answer": [
          "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications.",
          "It provides features such as SSL termination, URL-based routing, and Web Application Firewall (WAF)."
        ],
        "Code": [
          "// Example of creating an Application Gateway with SSL termination using Azure CLI",
          "az network application-gateway create \\",
          "  --name myAppGateway \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus \\",
          "  --sku Standard_v2 \\",
          "  --capacity 2 \\",
          "  --vnet-name myVNet \\",
          "  --subnet mySubnet \\",
          "  --frontend-port 443 \\",
          "  --http-settings-cookie-based-affinity Enabled \\",
          "  --http-settings-port 80 \\",
          "  --http-settings-protocol Http \\",
          "  --routing-rule-type Basic \\",
          "  --cert-file /path/to/cert.pfx \\",
          "  --cert-password MyP@ssword123"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Networking",
        "Question": "How do you set up a private endpoint for an Azure Storage account?",
        "Answer": [
          "To set up a private endpoint for an Azure Storage account, you need to create a private endpoint in your virtual network and link it to your storage account.",
          "This allows you to securely access the storage account over a private IP address."
        ],
        "Code": [
          "// Example of creating a private endpoint for a storage account using Azure CLI",
          "az network private-endpoint create \\",
          "  --name myPrivateEndpoint \\",
          "  --resource-group myResourceGroup \\",
          "  --vnet-name myVNet \\",
          "  --subnet mySubnet \\",
          "  --private-connection-resource-id /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount \\",
          "  --group-id blob \\",
          "  --connection-name myConnection"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How do you implement Azure Policy to enforce resource tagging?",
        "Answer": [
          "Azure Policy allows you to create, assign, and manage policies that enforce rules over your resources.",
          "To enforce resource tagging, you can create a policy definition that requires specific tags and assign it to your subscription or resource group."
        ],
        "Code": [
          "// Example of creating a policy definition to enforce resource tagging using Azure CLI",
          "az policy definition create \\",
          "  --name 'require-tags' \\",
          "  --display-name 'Require Tags' \\",
          "  --description 'This policy ensures that all resources have the required tags.' \\",
          "  --rules '{\"if\":{\"field\":\"tags\"},\"then\":{\"effect\":\"deny\"}}' \\",
          "  --mode All",
          "// Assign the policy to a resource group",
          "az policy assignment create \\",
          "  --name 'require-tags-assignment' \\",
          "  --policy 'require-tags' \\",
          "  --resource-group myResourceGroup"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Compute",
        "Question": "How do you create a custom image for an Azure Virtual Machine?",
        "Answer": [
          "To create a custom image for an Azure Virtual Machine, you need to create a VM, configure it as needed, deallocate and generalize the VM, and then create an image from the VM."
        ],
        "Code": [
          "// Example of creating a custom image from a VM using Azure CLI",
          "az vm deallocate \\",
          "  --resource-group myResourceGroup \\",
          "  --name myVM",
          "az vm generalize \\",
          "  --resource-group myResourceGroup \\",
          "  --name myVM",
          "az image create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myCustomImage \\",
          "  --source myVM"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "DevOps",
        "Question": "How do you implement Blue-Green deployment in Azure App Service?",
        "Answer": [
          "Blue-Green deployment is a technique that reduces downtime and risk by running two identical production environments, only one of which (Blue) serves live production traffic.",
          "To implement Blue-Green deployment in Azure App Service, you can use deployment slots to create a staging environment (Green) and swap it with the production slot (Blue) after validation."
        ],
        "Code": [
          "// Example of creating a deployment slot and swapping slots using Azure CLI",
          "az webapp deployment slot create \\",
          "  --name myWebApp \\",
          "  --resource-group myResourceGroup \\",
          "  --slot staging",
          "// Deploy to the staging slot",
          "az webapp deployment source config-zip \\",
          "  --resource-group myResourceGroup \\",
          "  --name myWebApp \\",
          "  --slot staging \\",
          "  --src myApp.zip",
          "// Swap the staging slot with the production slot",
          "az webapp deployment slot swap \\",
          "  --resource-group myResourceGroup \\",
          "  --name myWebApp \\",
          "  --slot staging"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Networking",
        "Question": "How do you set up a VPN connection between an on-premises network and Azure?",
        "Answer": [
          "To set up a VPN connection between an on-premises network and Azure, you need to create a Virtual Network Gateway in Azure and configure your on-premises VPN device.",
          "You will also need to create a Local Network Gateway in Azure to represent your on-premises network."
        ],
        "Code": [
          "// Example of creating a Virtual Network Gateway using Azure CLI",
          "az network vnet-gateway create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myVnetGateway \\",
          "  --public-ip-address myVnetGatewayIP \\",
          "  --vnet myVnet \\",
          "  --gateway-type Vpn \\",
          "  --vpn-type RouteBased \\",
          "  --sku VpnGw1 \\",
          "  --no-wait"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How do you implement role-based access control (RBAC) in Azure?",
        "Answer": [
          "Role-based access control (RBAC) in Azure allows you to manage access to Azure resources by assigning roles to users, groups, and applications.",
          "You can use built-in roles or create custom roles to define the permissions."
        ],
        "Code": [
          "// Example of assigning a role to a user using Azure CLI",
          "az role assignment create \\",
          "  --assignee user@domain.com \\",
          "  --role Contributor \\",
          "  --scope /subscriptions/{subscription-id}/resourceGroups/myResourceGroup"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Storage",
        "Question": "How do you implement geo-redundant storage (GRS) in Azure?",
        "Answer": [
          "Geo-redundant storage (GRS) in Azure replicates your data to a secondary region to protect against regional outages.",
          "You can enable GRS when creating a storage account or update the replication setting of an existing storage account."
        ],
        "Code": [
          "// Example of creating a storage account with GRS using Azure CLI",
          "az storage account create \\",
          "  --name mystorageaccount \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus \\",
          "  --sku Standard_GRS"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "DevOps",
        "Question": "How do you set up a CI/CD pipeline in Azure DevOps for a .NET application?",
        "Answer": [
          "To set up a CI/CD pipeline in Azure DevOps for a .NET application, you need to create a new pipeline, configure the build and release stages, and define the tasks for building, testing, and deploying the application."
        ],
        "Code": [
          "// Example of an Azure Pipelines YAML file for a .NET application",
          "trigger:",
          "  - main",
          "pool:",
          "  vmImage: 'ubuntu-latest'",
          "steps:",
          "  - task: UseDotNet@2",
          "    inputs:",
          "      packageType: 'sdk'",
          "      version: '5.x'",
          "  - script: dotnet build --configuration Release",
          "    displayName: 'Build project'",
          "  - script: dotnet test --no-build --configuration Release",
          "    displayName: 'Run tests'",
          "  - task: PublishBuildArtifacts@1",
          "    inputs:",
          "      PathtoPublish: '$(Build.ArtifactStagingDirectory)'",
          "      ArtifactName: 'drop'"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Database",
        "Question": "How do you migrate an on-premises SQL Server database to Azure SQL Database?",
        "Answer": [
          "To migrate an on-premises SQL Server database to Azure SQL Database, you can use the Azure Database Migration Service (DMS) or the Data Migration Assistant (DMA).",
          "These tools help you assess, plan, and execute the migration process."
        ],
        "Code": [
          "// Example of using Azure Database Migration Service (DMS)",
          "az dms create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myDms \\",
          "  --location eastus \\",
          "  --sku-name Premium_4vCores \\",
          "  --subnet /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "AI and Machine Learning",
        "Question": "How do you deploy a machine learning model to Azure Kubernetes Service (AKS)?",
        "Answer": [
          "To deploy a machine learning model to Azure Kubernetes Service (AKS), you need to create an AKS cluster, build a Docker image for your model, push the image to Azure Container Registry (ACR), and create a deployment in AKS using the image."
        ],
        "Code": [
          "// Example of deploying a model to AKS using Azure CLI",
          "az aks create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myAKSCluster \\",
          "  --node-count 1 \\",
          "  --enable-addons monitoring \\",
          "  --generate-ssh-keys",
          "// Build and push Docker image",
          "docker build -t myacr.azurecr.io/mymodel:latest .",
          "docker push myacr.azurecr.io/mymodel:latest",
          "// Create deployment in AKS",
          "kubectl create deployment mymodel-deployment --image=myacr.azurecr.io/mymodel:latest"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Monitoring",
        "Question": "How do you set up monitoring and alerts for an Azure application?",
        "Answer": [
          "To set up monitoring and alerts for an Azure application, you can use Azure Monitor, which provides a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.",
          "You can create alerts based on metrics, logs, and activity logs."
        ],
        "Code": [
          "// Example of creating a metric alert using Azure CLI",
          "az monitor metrics alert create \\",
          "  --name myAlert \\",
          "  --resource-group myResourceGroup \\",
          "  --scopes /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM \\",
          "  --condition \"avg Percentage CPU > 80\" \\",
          "  --description \"Alert when CPU usage is over 80%\" \\",
          "  --action-group myActionGroup"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How do you implement Azure Key Vault to manage secrets and keys?",
        "Answer": [
          "Azure Key Vault is a cloud service for securely storing and accessing secrets, keys, and certificates.",
          "You can use it to manage access to sensitive information and ensure that your applications follow best security practices."
        ],
        "Code": [
          "// Example of creating a Key Vault and adding a secret using Azure CLI",
          "az keyvault create \\",
          "  --name myKeyVault \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus",
          "az keyvault secret set \\",
          "  --vault-name myKeyVault \\",
          "  --name MySecret \\",
          "  --value MySecretValue"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Compute",
        "Question": "How do you scale an Azure App Service plan?",
        "Answer": [
          "To scale an Azure App Service plan, you can use the Azure portal, Azure CLI, or Azure PowerShell to change the pricing tier or configure autoscaling rules based on metrics such as CPU usage or request count."
        ],
        "Code": [
          "// Example of scaling an App Service plan using Azure CLI",
          "az appservice plan update \\",
          "  --name myAppServicePlan \\",
          "  --resource-group myResourceGroup \\",
          "  --sku P1v2"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Networking",
        "Question": "How do you configure Azure Application Gateway for load balancing and SSL termination?",
        "Answer": [
          "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications.",
          "It provides features such as SSL termination, URL-based routing, and Web Application Firewall (WAF)."
        ],
        "Code": [
          "// Example of creating an Application Gateway with SSL termination using Azure CLI",
          "az network application-gateway create \\",
          "  --name myAppGateway \\",
          "  --resource-group myResourceGroup \\",
          "  --location eastus \\",
          "  --sku Standard_v2 \\",
          "  --capacity 2 \\",
          "  --vnet-name myVNet \\",
          "  --subnet mySubnet \\",
          "  --frontend-port 443 \\",
          "  --http-settings-cookie-based-affinity Enabled \\",
          "  --http-settings-port 80 \\",
          "  --http-settings-protocol Http \\",
          "  --routing-rule-type Basic \\",
          "  --cert-file /path/to/cert.pfx \\",
          "  --cert-password MyP@ssword123"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Microsoft Azure?",
        "Answer": [
          "Microsoft Azure is a cloud computing platform and service created by Microsoft.",
          "It provides a range of cloud services, including those for computing, analytics, storage, and networking."
        ],
        "Code": [
          "// Example of creating a virtual machine in Azure using Azure CLI",
          "az vm create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myVM \\",
          "  --image UbuntuLTS \\",
          "  --admin-username azureuser \\",
          "  --generate-ssh-keys"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Storage",
        "Question": "What is Azure Blob Storage?",
        "Answer": [
          "Azure Blob Storage is a service for storing large amounts of unstructured data, such as text or binary data.",
          "It is designed for serving images or documents directly to a browser, storing files for distributed access, streaming video and audio, and more."
        ],
        "Code": [
          "// Example of uploading a file to Azure Blob Storage using Azure SDK for .NET",
          "var blobServiceClient = new BlobServiceClient(connectionString);",
          "var containerClient = blobServiceClient.GetBlobContainerClient(containerName);",
          "var blobClient = containerClient.GetBlobClient(blobName);",
          "await blobClient.UploadAsync(filePath, true);"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Networking",
        "Question": "What is Azure Virtual Network (VNet)?",
        "Answer": [
          "Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure.",
          "VNet enables many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks."
        ],
        "Code": [
          "// Example of creating a VNet using Azure CLI",
          "az network vnet create \\",
          "  --name myVNet \\",
          "  --resource-group myResourceGroup \\",
          "  --address-prefix 10.0.0.0/16 \\",
          "  --subnet-name mySubnet \\",
          "  --subnet-prefix 10.0.0.0/24"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Azure App Service?",
        "Answer": [
          "Azure App Service is a fully managed platform for building, deploying, and scaling web apps.",
          "It supports multiple languages and frameworks, including .NET, .NET Core, Java, Ruby, Node.js, PHP, and Python."
        ],
        "Code": [
          "// Example of creating a web app in Azure App Service using Azure CLI",
          "az webapp create \\",
          "  --resource-group myResourceGroup \\",
          "  --plan myAppServicePlan \\",
          "  --name myUniqueAppName \\",
          "  --runtime \"DOTNETCORE|3.1\""
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Security",
        "Question": "What is Azure Active Directory (Azure AD)?",
        "Answer": [
          "Azure Active Directory (Azure AD) is a cloud-based identity and access management service.",
          "It helps your employees sign in and access resources in external resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications."
        ],
        "Code": [
          "// Example of creating a new user in Azure AD using Azure CLI",
          "az ad user create \\",
          "  --display-name \"John Doe\" \\",
          "  --user-principal-name johndoe@mydomain.com \\",
          "  --password MyP@ssword123"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "DevOps",
        "Question": "What is Azure DevOps?",
        "Answer": [
          "Azure DevOps is a set of development tools provided by Microsoft to support software development teams.",
          "It includes Azure Repos, Azure Pipelines, Azure Boards, Azure Test Plans, and Azure Artifacts."
        ],
        "Code": [
          "// Example of creating a new Azure DevOps project using Azure CLI",
          "az devops project create \\",
          "  --name myProject \\",
          "  --organization https://dev.azure.com/myOrganization"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Azure Functions?",
        "Answer": [
          "Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure.",
          "It helps in processing data, integrating systems, working with IoT, and building simple APIs and microservices."
        ],
        "Code": [
          "// Example of creating an Azure Function using Azure CLI",
          "az functionapp create \\",
          "  --resource-group myResourceGroup \\",
          "  --consumption-plan-location westeurope \\",
          "  --runtime dotnet \\",
          "  --functions-version 3 \\",
          "  --name myUniqueFunctionAppName \\",
          "  --storage-account myStorageAccount"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Database",
        "Question": "What is Azure SQL Database?",
        "Answer": [
          "Azure SQL Database is a fully managed relational database with built-in intelligence that supports self-management features such as performance tuning and threat alerts.",
          "It is based on the latest stable version of the Microsoft SQL Server database engine."
        ],
        "Code": [
          "// Example of creating an Azure SQL Database using Azure CLI",
          "az sql db create \\",
          "  --resource-group myResourceGroup \\",
          "  --server myServer \\",
          "  --name myDatabase \\",
          "  --service-objective S0"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "AI and Machine Learning",
        "Question": "What is Azure Machine Learning?",
        "Answer": [
          "Azure Machine Learning is a cloud-based environment you can use to train, deploy, automate, and manage machine learning models.",
          "It supports open-source technologies such as TensorFlow, PyTorch, and scikit-learn."
        ],
        "Code": [
          "// Example of creating an Azure Machine Learning workspace using Azure CLI",
          "az ml workspace create \\",
          "  --resource-group myResourceGroup \\",
          "  --workspace-name myWorkspace"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Azure Kubernetes Service (AKS)?",
        "Answer": [
          "Azure Kubernetes Service (AKS) is a managed Kubernetes service that lets you quickly deploy and manage clusters.",
          "It simplifies the deployment, management, and operations of Kubernetes."
        ],
        "Code": [
          "// Example of creating an AKS cluster using Azure CLI",
          "az aks create \\",
          "  --resource-group myResourceGroup \\",
          "  --name myAKSCluster \\",
          "  --node-count 1 \\",
          "  --enable-addons monitoring \\",
          "  --generate-ssh-keys"
        ]
      }
    ]
  }
  