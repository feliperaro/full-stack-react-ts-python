import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('user')

s3 = boto3.client('s3')
print('Loading function')


def lambda_handler(event, context):
    bucket_name = event["Records"][0]["s3"]["bucket"]["name"]
    s3_file_name = event["Records"][0]["s3"]["object"]["key"]
    
    csv_object = s3.get_object(Bucket=bucket_name, Key=s3_file_name)
    file_reader = csv_object['Body'].read().decode("utf-8")
    
    users = file_reader.split("\n")
    users = list(filter(None, users))
    
    for user in users:
        user_data = user.split(",")
        table.put_item(Item = {
            "id" : user_data[0],
            "nome" : user_data[1],
            "cpf" : user_data[2],
            "cnpj" : user_data[3],
            "datas" : user_data[4],
        })
        	
    return {
        'status_code': 200,
        'body': 'success',
    }

