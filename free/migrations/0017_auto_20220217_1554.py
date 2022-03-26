# Generated by Django 3.2.9 on 2022-02-17 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('free', '0016_auto_20220217_1459'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experiment',
            name='config',
        ),
        migrations.AlterField(
            model_name='result',
            name='result_type',
            field=models.CharField(choices=[('p', 'Partial'), ('f', 'Final')], max_length=1, verbose_name='Result type'),
        ),
    ]
