# Generated by Django 3.2.12 on 2022-04-12 23:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('free', '0019_auto_20220217_1603'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='apparatustype',
            options={'ordering': ['name'], 'verbose_name': 'Apparatus type', 'verbose_name_plural': 'Apparatus types'},
        ),
    ]