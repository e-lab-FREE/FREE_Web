# Generated by Django 3.2.6 on 2021-09-30 14:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('free', '0003_alter_execution_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='execution',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='free.execution'),
        ),
    ]
